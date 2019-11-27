import React, { Component, useContext } from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import { ItemPreviewContext } from '../../context/ItemPreviewProvider'
import ItemCard from '../ItemCard/'

export class ShareItemPreview extends Component {
  render() {
    const { classes } = this.props
    return (
      <ItemPreviewContext.Consumer>
        {({ state, updatePreview, resetPreview }) => (
          <ItemCard
            imageUrl={state.item.imageUrl}
            itemOwner={state.item.itemowner}
            itemName={state.item.itemName}
            itemDesc={state.item.itemDesc}
          />
        )}
      </ItemPreviewContext.Consumer>
    )
  }
}

export default withStyles(styles)(ShareItemPreview)
