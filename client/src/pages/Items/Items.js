import React from 'react'
// import { withStyles } from '@material-ui/core/styles'
import { useMutation } from '@apollo/react-hooks'
import ItemCard from '../../components/ItemCard/'
import { ALL_ITEMS_QUERY } from '../../apollo/queries'
import ViewerProvider from '../../context/ViewerProvider'
import { graphql, compose } from 'react-apollo'
const Items = ({ classes, allItems }) => {
  return (
    <ViewerProvider.Consumer>
      {({ data, loading }) => {
        console.log(allItems)
        return (
          <>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </>
        )
      }}
    </ViewerProvider.Consumer>
  )
}

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
