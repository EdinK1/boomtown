import React, { Component } from 'react'
import Items from './Items'
import styles from './styles'
// import { Query } from 'react-apollo';
// import { } from '../../apollo/queries';
import { withStyles } from '@material-ui/core/styles'
import Navbar from '../../components/Navbar'

class ItemsContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { classes } = this.props
    return (
      <>
        <Navbar />
        <main className={classes.mainGrid}>
          <Items />
        </main>
      </>
    )
  }
}

export default withStyles(styles)(ItemsContainer)
