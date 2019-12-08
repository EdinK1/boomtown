function tagsQueryString(tags, itemid, result) {
  for (i = 0; i < tags.length; i++) {
    result += `(${i + 1}, ${itemid}),`
  }
  return result.slice(0, -1) + ';'
}

module.exports = postgres => {
  return {
    async createUser({ fullName, email, password }) {
      const newUserInsert = {
        text:
          'INSERT INTO users ("fullName", email, password) VALUES ($1, $2, $3) RETURNING *',
        values: [fullName, email, password]
      }
      try {
        const user = await postgres.query(newUserInsert)
        return user.rows[0]
      } catch (e) {
        switch (true) {
          case /users_fullname_key/.test(e.message):
            throw 'An account with this username already exists.'
          case /users_email_key/.test(e.message):
            throw 'An account with this email already exists.'
          default:
            throw 'There was a problem creating your account.'
        }
      }
    },
    async getUserAndPasswordForVerification(email) {
      const findUserQuery = {
        text: 'SELECT * FROM users WHERE email = $1',
        values: [email]
      }
      try {
        const user = await postgres.query(findUserQuery)
        if (!user) throw 'User was not found.'
        return user.rows[0]
      } catch (e) {
        throw 'User was not found.'
      }
    },
    async getUserById(id) {
      const findUserQuery = {
        text: 'SELECT * FROM users WHERE id = $1',
        values: [id]
      }
      try {
        const user = await postgres.query(findUserQuery)
        return user.rows[0]
      } catch (err) {
        throw 'User not found'
      }
    },
    async getItems(idToOmit) {
      const items = await postgres.query({
        text: `SELECT * FROM items ${idToOmit ? `WHERE"ownerId" != $1` : ``}`,
        values: idToOmit ? [idToOmit] : []
      })
      return items.rows
    },
    async getItemsForUser(id) {
      const items = await postgres.query({
        text: `SELECT * FROM ITEMS WHERE "ownerId" = $1`,
        values: [id]
      })
      return items.rows
    },
    async getBorrowedItemsForUser(id) {
      const items = await postgres.query({
        text: `
          SELECT * FROM ITEMS
            WHERE "borrowerId" = $1
        `,
        values: [id]
      })
      return items.rows
    },
    async getTags() {
      const tags = await postgres.query({ text: `SELECT * FROM tags` })
      return tags.rows
    },
    async getTagsForItem(id) {
      const tagsQuery = {
        text: `SELECT * FROM itemstags INNER JOIN tags ON itemstags."tagId" = tags.id WHERE itemstags."itemId"=$1`,
        values: [id]
      }

      const tags = await postgres.query(tagsQuery)
      return tags.rows
    },
    async saveNewItem({ item, user }) {
      return new Promise((resolve, reject) => {
        postgres.connect((err, client, done) => {
          try {
            client.query('BEGIN', async err => {
              const { title, description, tags, imageurl } = item
              const itemQuery = {
                text: `INSERT INTO items(title, description, "ownerId", imageurl) VALUES ($1, $2, $3, $4) RETURNING *`,
                values: [title, description, user.id, imageurl]
              }

              const newItem = await postgres.query(itemQuery)

              const tagsWithItems = {
                text: `INSERT INTO itemstags("tagId", "itemId") VALUES ${tagsQueryString(
                  [...tags],
                  newItem.rows[0].id,
                  ''
                )} `
              }

              console.log(tagsWithItems)

              await postgres.query(tagsWithItems)

              // if (Array.isArray(tags) && tags.length) {
              //   await postgres.query({
              //     text:
              //       tags
              //         .reduce(
              //           (acc, val) => `${acc}(${newItemId}, $${val}),`,
              //           'INSERT INTO item_tags ("item_id", "tag_id") VALUES '
              //         )
              //         .slice(0, -1) + ';',
              //     values: tags
              //   })
              // }

              client.query('COMMIT', err => {
                if (err) {
                  throw err
                }
                done()
                resolve(newItem.rows[0])
              })
            })
          } catch (e) {
            client.query('ROLLBACK', err => {
              if (err) {
                throw err
              }
              done()
            })
            switch (true) {
              default:
                throw e
            }
          }
        })
      })
    }
  }
}
