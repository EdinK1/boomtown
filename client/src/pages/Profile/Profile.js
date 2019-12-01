import React, { useContext } from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import ViewerContext from '../../context/ViewerProvider'
import ProfileQuery from '../../components/ProfileContent/ProfileQuery'

const Profile = ({ classes }) => {
  const { viewer, loading } = useContext(ViewerContext)

  if (loading) return <p>loading...</p>
  return (
    <>
      <main>{viewer && <ProfileQuery viewer={viewer} />}</main>
    </>
  )
}

export default withStyles(styles)(Profile)
