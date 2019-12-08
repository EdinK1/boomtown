import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ShareItemForm from '../../components/ShareItemForm'
import ShareItemPreview from '../../components/ShareItemPreview/index'
import Navbar from '../../components/Navbar'

const Share = ({ classes }) => {
  const matches = useMediaQuery('(min-width:900px)')
  return (
    <>
      <Navbar />
      <main className={classes.container}>
        {matches ? <ShareItemPreview /> : null}
        <ShareItemForm />
      </main>
    </>
  )
}

export default withStyles(styles)(Share)
