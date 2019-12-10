import React from 'react'
import ItemCard from '../../components/ItemCard/'
import { ALL_ITEMS_QUERY } from '../../apollo/queries'
import { Query } from 'react-apollo'
import { useHistory } from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner'

const Items = ({ classes, viewer }) => {
  return (
    <Query query={ALL_ITEMS_QUERY} variables={{ filter: viewer.id }}>
      {({ loading, error, data }) => {
        if (loading) return <Spinner />
        if (error) return <p>somethig's wrong</p>
        const redirectToUserProfile = data => {
          let history = useHistory()
          history.push(`/`)
        }
        return data.items.map(item => (
          <ItemCard
            key={item.id}
            imageUrl={
              item.imageurl ||
              'https://img.thedailybeast.com/image/upload/v1531451526/180712-Weill--The-Creator-of-Pepe-hero_uionjj.jpg'
            }
            itemName={item.title}
            itemDesc={item.description}
            itemOwner={viewer.fullname}
            itemTags={item.tags}
            created={item.created}
            onClick={redirectToUserProfile}
          />
        ))
      }}
    </Query>
  )
}

export default Items
