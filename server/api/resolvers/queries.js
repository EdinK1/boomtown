const { ApolloError } = require('apollo-server')

module.exports = app => ({
  viewer(parent, args, { user }, info) {
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
  async tags(parent, { pgResource }, info) {
    try {
      const tags = await pgResource.getTags(parent)
      return tags
    } catch (e) {
      throw new ApolloError(e)
    }
  }
})
