const { ApolloError } = require('apollo-server')
const jwt = require('jsonwebtoken')

module.exports = app => ({
  async viewer(parent, args, { token, pgResource, req }, info) {
    let user = jwt.decode(token, app.get('JWT_SECRET'))
    user = await pgResource.getUserById(user.id)
    return user
  },
  async user(parent, { id }, { pgResource }, info) {
    try {
      const user = await pgResource.getUserById(id)
      return user
    } catch (e) {
      throw new ApolloError(e)
    }
  },
  async items(parent, { filter }, { pgResource }, info) {
    try {
      const items = await pgResource.getItems(filter)
      return items
    } catch (e) {
      throw new ApolloError(e)
    }
  },
  async tags(parent, args, { pgResource }, info) {
    try {
      const tags = await pgResource.getTags(parent)
      return tags
    } catch (e) {
      throw new ApolloError(e)
    }
  }
})
