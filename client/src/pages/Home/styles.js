const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    background: theme.palette.primary.main,
    padding: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(20)
    }
  },
  headline: {
    fontWeight: 800,
    color: theme.palette.text.primary,
    fontSize: '3.4rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '3.4rem',
      lineHeight: '1.15'
    }
  },
  subheading: {
    fontWeight: 400,
    color: 'white'
  },
  welcomeTitle: {
    fontSize: '1.5rem'
  }
})

export default styles
