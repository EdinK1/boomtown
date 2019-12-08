import React from 'react'
import spinner from '../../images/spinner.gif'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  wrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '9999'
  }
}))
const Spinner = () => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <img src={spinner} alt='spinner' />
    </div>
  )
}

export default Spinner
