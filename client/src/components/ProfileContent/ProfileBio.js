import React from 'react'
import Paper from '@material-ui/core/Paper'

const ProfileBio = ({ fullName, itemsSum, borrowedSum, bio }) => {
  return (
    <Paper>
      <h3>{fullName}</h3>
      <p>
        {itemsSum} items share {borrowedSum} items borrowed
      </p>
      <p>{bio || `"No bio provided."`}</p>
    </Paper>
  )
}

export default ProfileBio
