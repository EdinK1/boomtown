import gql from 'graphql-tag'

const ItemFields = gql`
  fragment ItemFields on Item {
    id
    title
    imageurl
    description
    created
    tags {
      id
      title
    }
    itemowner {
      id
      fullName
      email
      bio
    }
    borrower {
      id
      fullName
      email
      bio
    }
  }
`
export const ITEM_QUERY = gql`
  query item($id: ID!) {
    items(id: $id) {
      ...ItemFields
    }
  }
  ${ItemFields}
`

export const ALL_ITEMS_QUERY = gql`
  query items($filter: ID) {
    items(filter: $filter) {
      ...ItemFields
    }
  }
  ${ItemFields}
`

export const ALL_USER_ITEMS_QUERY = gql`
  query user($id: ID!) {
    user(id: $id) {
      bio
      email
      fullName
      items {
        ...ItemFields
      }
      borrowed {
        ...ItemFields
      }
    }
  }

  ${ItemFields}
`

export const ALL_TAGS_QUERY = gql`
  query tags {
    tags {
      id
      title
    }
  }
`

export const ADD_ITEM_MUTATION = gql`
  mutation addItem($item: NewItemInput!) {
    addItem(item: $item) {
      id
      title
      description
      imageurl
      tags {
        id
        title
      }
    }

    # id: ID!
    # title: String!
    # imageurl: String
    # description: String
    # itemowner: User
    # created: Date
    # tags: [Tag]
  }
`

export const VIEWER_QUERY = gql`
  query viewer {
    viewer {
      id
      email
      fullName
      bio
    }
  }
`

export const LOGOUT_MUTATION = gql`
  mutation logout {
    logout
  }
`

export const SIGNUP_MUTATION = gql`
  mutation signup($user: SignupInput!) {
    signup(user: $user) {
      token
      user {
        id
      }
    }
  }
`

export const LOGIN_MUTATION = gql`
  mutation login($user: LoginInput!) {
    login(user: $user) {
      token
      user {
        id
      }
    }
  }
`
