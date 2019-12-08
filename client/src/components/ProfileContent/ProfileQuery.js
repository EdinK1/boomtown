import React from 'react'
import { Query } from 'react-apollo'
import ProfileBio from '../../components/ProfileContent/ProfileBio'
import { ALL_USER_ITEMS_QUERY } from '../../apollo/queries'
import ItemCard from '../ItemCard'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import Spinner from '../Spinner/Spinner'

const ProfileQuery = ({ classes, viewer }) =>
  viewer ? (
    <Query query={ALL_USER_ITEMS_QUERY} variables={{ id: viewer.id }}>
      {({ loading, error, data }) => {
        if (loading) return null
        if (error) return `Error! ${error}`
        return (
          <>
            <ProfileBio
              itemOwner={viewer.id}
              fullName={data.user.fullName}
              itemsSum={data.user.items.length}
              borrowedSum={data.user.borrowed.length}
              bio={data.user.bio}
            />
            <main className={classes.sharedItemsWrapper}>
              <Typography className={classes.sharedItemsTitle} variant='h4'>
                Shared Items
              </Typography>
              <ul className={classes.sharedItems}>
                {data.user.items.map(item => (
                  <li className={classes.sharedItem} key={item.id}>
                    <ItemCard
                      id={item.id}
                      imageUrl={
                        item.imageurl ||
                        'https://img.thedailybeast.com/image/upload/v1531451526/180712-Weill--The-Creator-of-Pepe-hero_uionjj.jpg'
                      }
                      itemName={item.title}
                      itemDesc={item.description}
                      itemOwner={item.itemowner}
                      itemTags={item.tags}
                    />
                  </li>
                ))}
              </ul>
            </main>
          </>
        )
      }}
    </Query>
  ) : (
    <Spinner />
  )

export default withStyles(styles)(ProfileQuery)
