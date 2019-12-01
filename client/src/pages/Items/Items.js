import React from 'react'
import ItemCard from '../../components/ItemCard/'
import { ALL_ITEMS_QUERY } from '../../apollo/queries'
import { graphql, compose } from 'react-apollo'
const Items = ({ classes, allItems }) => (
  <>
    {!allItems.loading &&
      allItems.items.map(item => (
        <ItemCard
          key={item.id}
          id={item.id}
          imageUrl={item.imageUrl}
          itemName={item.title}
          itemDesc={item.description}
          itemOwner={item.itemonwer}
          itemTags={item.itemTags}
        />
      ))}
  </>
)

export default compose(
  graphql(ALL_ITEMS_QUERY, {
    options: {
      query: {
        ALL_ITEMS_QUERY
      }
    },
    name: 'allItems'
  })
)(Items)
