import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

import ShareItemForm from '../../components/ShareItemForm'
import ShareItemPreview from '../../components/ShareItemPreview/index'
import Navbar from '../../components/Navbar'

const Share = ({ classes }) => {
  return (
    <>
      <Navbar />
      <main className={classes.container}>
        <ShareItemPreview />
        <ShareItemForm />
      </main>
    </>
  )
}

export default withStyles(styles)(Share)
