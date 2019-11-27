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
    item(id: $id) {
      ...ItemFields
    }
  }
  ${ItemFields}
`

export const ALL_ITEMS_QUERY = gql`
  query items($filter: ID) {
    id
    item(filter: $filter) {
      ...ItemFields
    }
  }
  ${ItemFields}
`

export const ALL_USER_ITEMS_QUERY = gql`
  query user($id: ID!) {
    id
    user(id: $id) {
      bio
      email
      fullName
      items {
        ...ItemFields
      }
      borrowed {
        ...itemFields
      }
    }
  }
  ${ItemFields}
`

export const ALL_TAGS_QUERY = gql`
  query {
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
      tags {
        id
        title
      }
      imageURL
    }
  }
`

export const VIEWER_QUERY = gql`
  query {
    user {
      id
      email
      fullName
      bio
    }
  }
`

export const LOGOUT_MUTATION = gql`
  mutation logout($user: logout!) {
    logout(user: $user) {
      token
      user {
        id
      }
    }
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
