const { gql } = require('apollo-server-express')

module.exports = gql`
  scalar Date
  directive @auth on OBJECT | FIELD_DEFINITION

  type Item @auth {
    id: ID!
    title: String!
    imageurl: String
    description: String!
    itemowner: User!
    created: Date!
    tags: [Tag]
    borrower: User
  }

  type User @auth {
    id: ID!
    email: String!
    fullName: String!
    bio: String
    items: [Item]
    borrowed: [Item]
  }

  type Tag {
    id: ID!
    title: String!
  }

  type File {
    id: ID!
    fileName: String!
    mimetype: String!
    itemid: ID!
  }

  type AuthPayload {
    token: String
    user: User
  }

  input AssignedTag {
    id: ID!
    title: String!
  }

  input AssignedBorrower {
    id: ID!
  }

  input NewItemInput {
    title: String!
    description: String
    tags: [AssignedTag]!
  }

  input SignupInput {
    fullName: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Query {
    user(id: ID!): User
    viewer: User
    items(filter: ID): [Item]
    tags: [Tag]
  }

  type Mutation {
    signup(user: SignupInput!): AuthPayload!
    login(user: LoginInput!): AuthPayload!
    logout: Boolean!
    addItem(item: NewItemInput!): Item
  }
`
