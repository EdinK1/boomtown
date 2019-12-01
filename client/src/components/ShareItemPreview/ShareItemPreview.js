import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import { ItemPreviewContext } from '../../context/ItemPreviewProvider'
import ItemCard from '../ItemCard/'

const ShareItemPreview = () => {
  return (
    <ItemPreviewContext.Consumer>
      {({ state }) =>
        console.log(state) || (
          <ItemCard
            imageUrl={state.item.itemImg}
            itemOwner={state.item.itemowner}
            itemName={state.item.itemName}
            itemDesc={state.item.itemDesc}
            itemTags={state.item.tags}
          />
        )
      }
    </ItemPreviewContext.Consumer>
  )
}

export default withStyles(styles)(ShareItemPreview)
