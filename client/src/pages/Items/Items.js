import React, { useContext } from 'react'
import ItemCard from '../../components/ItemCard/'
import { ALL_ITEMS_QUERY } from '../../apollo/queries'
import { Query } from 'react-apollo'

const Items = ({ classes, viewer }) => (
  <Query query={ALL_ITEMS_QUERY} variables={{ filter: viewer.id }}>
    {({ loading, error, data }) => {
      if (loading) return <div>loading...</div>
      if (error) return <p>somethig's wrong</p>
      return data.items.map(item => (
        <ItemCard
          key={item.id}
          itemOwner='hey'
          imageUrl={item.imageUrl}
          itemName={item.title}
          itemDesc={item.description}
          itemOwner={item.itemowner}
          itemTags={item.itemTags}
        />
      ))
    }}
  </Query>
)

export default Items
