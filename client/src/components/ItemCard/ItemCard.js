import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  card: {
    width: '400px'
  },
  cardContent: {
    margin: '2rem 0'
  },
  borrowBtn: {
    border: '0.5px solid #333',
    padding: '0.4rem 1.5rem',
    marginBottom: '0.5rem',
    fontSize: '0.9rem'
  }
}))

const ItemCard = ({ imageUrl, itemOwner, itemName, itemDesc }) => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='230'
          image={
            imageUrl ||
            'https://via.placeholder.com/300x300?text=Please select an image'
          }
        />
        <CardContent>
          <div>
            <Avatar
              alt='Owner Avatar'
              src={itemOwner}
              className={classes.avatar}
            />
            {/* <span>{state.item.itemowner}</span> */}
          </div>
          <section className={classes.cardContent}>
            <Typography gutterBottom variant='h5' component='h2'>
              {itemName}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {itemDesc}
            </Typography>
          </section>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.borrowBtn} size='small' color='secondary'>
          Borrow
        </Button>
      </CardActions>
    </Card>
  )
}

export default ItemCard
