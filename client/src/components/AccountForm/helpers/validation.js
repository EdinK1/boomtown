const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Please provide your email'
  }
  if (!values.password) {
    errors.password = `Password can't be blank`
  }
  if (values.fullname && !values.fullname) {
    errors.password = 'Required'
  } else if (values.fullname && !values.fullname) {
    errors.password = 'Required'
  }
  return errors
}

export default validate
