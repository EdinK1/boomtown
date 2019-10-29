const { GraphQLScalarType } = require('graphql')

// @TODo: Refactor this into a custom DATE scalar type using new GraphQLScalarType()
const DateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Custom scalar type called Date',
  returnValue(v) {
    return new Date(v)
  },
  serialize(v) {
    return v.getTime()
  },
  returnLiteral(v) {
    v.kind === Kind.INT ? new Date(v.value) : null
  }
})

module.exports = {
  DateScalar
}
