import React, { useContext } from 'react'
import Items from './Items'
import styles from './styles'
import { withStyles } from '@material-ui/core/styles'
import Navbar from '../../components/Navbar'
import ViewerContext from '../../context/ViewerProvider'

const ItemsContainer = ({ classes }) => {
  const { viewer, loading } = useContext(ViewerContext)

  return (
    <>
      <Navbar />
      <main className={classes.mainGrid}>
        <Items viewer={viewer} />
      </main>
    </>
  )
}

export default withStyles(styles)(ItemsContainer)
