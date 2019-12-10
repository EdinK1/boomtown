import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import { ItemPreviewContext } from '../../context/ItemPreviewProvider'
import ItemCard from '../ItemCard/'

const ShareItemPreview = ({ classes }) => {
  return (
    <ItemPreviewContext.Consumer>
      {({ state }) => (
        <section>
          <ItemCard
            imageUrl={state.item.itemImg}
            itemName={state.item.itemName}
            itemDesc={state.item.itemDesc}
            itemOwner={state.item.itemOwner}
            created={state.item.created}
            itemTags={state.item.tags}
          />
        </section>
      )}
    </ItemPreviewContext.Consumer>
  )
}

export default withStyles(styles)(ShareItemPreview)
