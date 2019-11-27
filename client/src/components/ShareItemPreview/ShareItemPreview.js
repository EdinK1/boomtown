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

export class ShareItemPreview extends Component {
  render() {
    const { classes } = this.props
    return (
      <ItemPreviewContext.Consumer>
        {({ state, updatePreview, resetPreview }) => (
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='230'
                image={state.item.itemImg}
              />
              <CardContent>
                <div>
                  <Avatar
                    alt='Owner Avatar'
                    src={state.item.itemowner}
                    className={classes.avatar}
                  />
                  {/* <span>{state.item.itemowner}</span> */}
                </div>
                <section className={classes.cardContent}>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {state.item.itemName}
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    {state.item.itemDesc}
                  </Typography>
                </section>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                className={classes.borrowBtn}
                size='small'
                color='secondary'
              >
                Borrow
              </Button>
            </CardActions>
          </Card>
        )}
      </ItemPreviewContext.Consumer>
    )
  }
}

export default withStyles(styles)(ShareItemPreview)
