import React, { useContext } from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Gravatar from 'react-gravatar'
import { makeStyles } from '@material-ui/core/styles'
import ViewerContext from '../../context/ViewerProvider'
import { useHistory } from 'react-router-dom'
const useStyles = makeStyles(theme => ({
  card: {
    [theme.breakpoints.up('sm')]: {
      width: '100%'
    },
    width: '100%'
  },
  cardContent: {
    margin: '2rem 0'
  },
  cardUserHeader: {
    display: 'flex',
    alignItems: 'center'
  },
  gravatar: {
    borderRadius: '50%'
  },
  cardUserInfo: {
    marginLeft: '1rem'
  },
  cardUserName: {
    textTransform: 'capitalize'
  },
  borrowBtn: {
    border: '0.5px solid #333',
    padding: '0.4rem 1.5rem',
    marginBottom: '0.5rem',
    fontSize: '0.9rem'
  }
}))
const ItemCard = ({
  imageUrl,
  itemOwner,
  itemName,
  itemDesc,
  itemTags,
  created
}) => {
  const history = useHistory()
  const classes = useStyles()
  const { viewer, loading } = useContext(ViewerContext)
  if (loading) return <p>loading...</p>
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia component='img' height='230' image={imageUrl} />
        <CardContent>
          <section className={classes.cardUserHeader}>
            <Gravatar
              default='robohash'
              className={classes.gravatar}
              email={viewer.email}
            />
            <section className={classes.cardUserInfo}>
              <Typography
                className={classes.cardUserName}
                variant='body1'
                component='h3'
              >
                {itemOwner}
              </Typography>
              <Typography variant='body2' component='p'>
                {created}
              </Typography>
            </section>
          </section>
          <section className={classes.cardContent}>
            <Typography gutterBottom variant='h5' component='h2'>
              {itemName}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {itemDesc}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {itemTags ? itemTags.map(({ title }) => title).join(', ') : null}
            </Typography>
          </section>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          disabled={history.location.pathname === '/share' ? true : false}
          className={classes.borrowBtn}
          size='small'
          color='secondary'
        >
          Borrow
        </Button>
      </CardActions>
    </Card>
  )
}

export default ItemCard
