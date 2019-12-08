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
            itemOwner={state.item.itemowner}
            itemName={state.item.itemName}
            itemDesc={state.item.itemDesc}
            itemTags={state.item.tags}
            created={state.item.created}
          />
        </section>
      )}
    </ItemPreviewContext.Consumer>
  )
}

export default withStyles(styles)(ShareItemPreview)
