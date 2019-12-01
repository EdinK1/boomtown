import React from 'react'
import { Query } from 'react-apollo'
import ProfileBio from '../../components/ProfileContent/ProfileBio'
import { ALL_USER_ITEMS_QUERY } from '../../apollo/queries'

const ProfileQuery = ({ viewer }) =>
  viewer ? (
    <Query query={ALL_USER_ITEMS_QUERY} variables={{ id: viewer.id }}>
      {({ loading, error, data }) => {
        if (loading) return null
        if (error) return `Error! ${error}`
        return (
          <ProfileBio
            fullName={data.user.fullName}
            itemsSum={data.user.items.length}
            borrowedSum={data.user.borrowed.length}
            bio={data.user.bio}
          />
        )
      }}
    </Query>
  ) : (
    <p>loading...</p>
  )

export default ProfileQuery
