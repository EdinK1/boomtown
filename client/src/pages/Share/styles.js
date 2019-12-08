const styles = theme => ({
  container: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '90%'
    }
  }
})

export default styles
