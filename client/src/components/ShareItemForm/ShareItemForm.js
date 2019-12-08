import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import MenuItem from '@material-ui/core/MenuItem'
import { ListItemText } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'
import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { Select, Checkbox } from '@material-ui/core'
import { ALL_TAGS_QUERY, ADD_ITEM_MUTATION } from '../../apollo/queries'
import { graphql, compose } from 'react-apollo'
import { Form, Field } from 'react-final-form'
import styles from './styles'
import { ItemPreviewContext } from '../../context/ItemPreviewProvider'
import ViewerContext from '../../context/ViewerProvider'

class ShareForm extends Component {
  render() {
    const { classes, allTags, addItem } = this.props

    return (
      <ViewerContext.Consumer>
        {({ viewer, loading }) => (
          <ItemPreviewContext.Consumer>
            {({ updatePreview, resetPreview }) => (
              <Form
                onSubmit={values => {
                  const addItemMutation = {
                    variables: {
                      item: {
                        title: values.itemName,
                        description: values.itemDesc,
                        imageurl: values.itemImg,
                        tags: values.tags.map(tag => parseInt(tag))
                      }
                    }
                  }
                  addItem(addItemMutation)
                  console.log(addItem)
                }}
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
                      <InputLabel htmlFor='itemDesc'>
                        Describe your item
                      </InputLabel>
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
                        render={({ input }) => {
                          const { value, onChange, ...inputProps } = input
                          return (
                            <Select
                              id='tags'
                              multiple
                              className={classes.formSelect}
                              renderValue={values =>
                                values
                                  .map(
                                    value =>
                                      allTags.tags.find(
                                        ({ id }) => id === value
                                      ).title
                                  )
                                  .join(', ')
                              }
                              value={value || []}
                              inputProps={inputProps}
                              onChange={e =>
                                updatePreview(
                                  'tags',
                                  allTags
                                    ? allTags.tags.filter(({ id }) =>
                                        e.target.value.includes(String(id))
                                      )
                                    : []
                                ) || onChange(e)
                              }
                            >
                              {allTags &&
                                allTags.tags &&
                                allTags.tags.map(({ id, title }) => (
                                  <MenuItem
                                    key={id}
                                    className={classes.formOption}
                                    value={id}
                                  >
                                    <Checkbox
                                      checked={
                                        !!(
                                          value &&
                                          value.some(
                                            selectedId => selectedId === id
                                          )
                                        )
                                      }
                                    />
                                    <ListItemText primary={title} />
                                  </MenuItem>
                                ))}
                            </Select>
                          )
                        }}
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
        )}
      </ViewerContext.Consumer>
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
    name: 'allTags'
  }),
  graphql(ADD_ITEM_MUTATION, {
    name: 'addItem'
  }),
  withStyles(styles)
)(ShareForm)
