const { GraphQLScalarType } = require('graphql')

// @TODo: Refactor this into a custom DATE scalar type using new GraphQLScalarType()
const DateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Custom scalar type called Date',
  parseValue(v) {
    return new Date(v)
  },
  serialize(v) {
    return v.getTime()
  },
  parseLiteral(ast) {
    ast.kind === Kind.INT ? new Date(ast.value) : null
  }
})

module.exports = {
  DateScalar
}
