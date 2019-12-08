import React from 'react'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import Typography from '@material-ui/core/Typography'

const ProfileBio = ({ classes, fullName, itemsSum, borrowedSum, bio }) => {
  return (
    <Paper className={classes.profilePaper}>
      <header className={classes.profileWrapper}>
        <Typography className={classes.profileUserTitle} component='h1'>
          {fullName}
        </Typography>
        <Typography className={classes.profileUserInfo} component='p'>
          <strong>{itemsSum}</strong> Items share <strong>{borrowedSum}</strong>{' '}
          Items borrowed
        </Typography>
        <Typography className={classes.profileUserBio} component='p'>
          {bio || `"No bio provided."`}
        </Typography>
      </header>
    </Paper>
  )
}

export default withStyles(styles)(ProfileBio)
