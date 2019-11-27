import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { Select, Checkbox } from '@material-ui/core'
import { ALL_TAGS_QUERY } from '../../apollo/queries'
import { graphql, compose } from 'react-apollo'
import { Form, Field } from 'react-final-form'
import styles from './styles'
import { ItemPreviewContext } from '../../context/ItemPreviewProvider'

class ShareForm extends Component {
  constructor(props) {
    super(props)
  }

  onSubmit() {
    console.log('test')
  }

  render() {
    const { classes, allItems } = this.props

    return (
      <ItemPreviewContext.Consumer>
        {({ state, updatePreview, resetPreview }) => (
          <Form
            onSubmit={this.onSubmit}
            render={({ handleSubmit }) => (
              <form
                onSubmit={handleSubmit}
                onChange={e => updatePreview(e.target.name, e.target.value)}
                className={classes.form}
              >
                <FormControl fullWidth className={classes.formControl}>
                  <Typography className={classes.formTitle} component='h1'>
                    Share. Borrow. Prosper
                  </Typography>
                </FormControl>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel htmlFor='itemImg'>Add image url</InputLabel>
                  <Field
                    name='itemImg'
                    render={({ input, meta }) => (
                      <Input
                        id='itemImg'
                        type='text'
                        error={meta.touched && !!meta.error}
                        inputProps={{
                          ...input,
                          autoComplete: 'off'
                        }}
                        value={input.value}
                      />
                    )}
                  />
                </FormControl>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel htmlFor='itemName'>Name your item</InputLabel>
                  <Field
                    name='itemName'
                    render={({ input, meta }) => (
                      <Input
                        id='itemName'
                        type='text'
                        error={meta.touched && !!meta.error}
                        inputProps={{
                          ...input,
                          autoComplete: 'off'
                        }}
                        value={input.value}
                      />
                    )}
                  />
                </FormControl>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel htmlFor='itemDesc'>Describe your item</InputLabel>
                  <Field
                    name='itemDesc'
                    render={({ input, meta }) => (
                      <Input
                        id='itemDesc'
                        type='text'
                        error={meta.touched && !!meta.error}
                        inputProps={{
                          ...input,
                          autoComplete: 'off'
                        }}
                        value={input.value}
                      />
                    )}
                  />
                </FormControl>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel htmlFor='tags'>Add some tags</InputLabel>
                  <Field
                    name='tags'
                    render={({ input }) => (
                      <Select
                        value={allItems.tags}
                        className={classes.formSelect}
                        id='tags'
                      >
                        {allItems &&
                          allItems.tags &&
                          allItems.tags.map(({ title }) => (
                            <li className={classes.formOptionList}>
                              <Checkbox />
                              <MenuItem
                                className={classes.formOption}
                                value={title}
                              >
                                {title}
                              </MenuItem>
                            </li>
                          ))}
                      </Select>
                    )}
                  />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <Button
                    type='submit'
                    className={classes.formButton}
                    variant='contained'
                    size='large'
                    color='secondary'
                  >
                    Share
                  </Button>
                </FormControl>
              </form>
            )}
          />
        )}
      </ItemPreviewContext.Consumer>
    )
  }
}

export default compose(
  graphql(ALL_TAGS_QUERY, {
    options: {
      query: {
        ALL_TAGS_QUERY
      }
    },
    name: 'allItems'
  }),
  withStyles(styles)
)(ShareForm)
