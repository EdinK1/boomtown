import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import { ItemPreviewContext } from '../../context/ItemPreviewProvider'
import ItemCard from '../ItemCard/'

const ShareItemPreview = () => {
  return (
    <ItemPreviewContext.Consumer>
      {({ state }) => (
        <ItemCard
          imageUrl={state.item.itemImg}
          // TODO: Don't forget to change the above to (state.item.itemowner)
          itemOwner='test'
          itemName={state.item.itemName}
          itemDesc={state.item.itemDesc}
          itemTags={state.item.tags}
          created={state.item.created}
        />
      )}
    </ItemPreviewContext.Consumer>
  )
}

export default withStyles(styles)(ShareItemPreview)
