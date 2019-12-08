const styles = theme => ({
  mainGrid: {
    display: 'grid',
    gridGap: '25px',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: 'auto'
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'auto'
    }
  }
})

export default styles
