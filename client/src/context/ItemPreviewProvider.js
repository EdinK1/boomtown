import React, { Component, createContext, Children } from 'react'

export const ItemPreviewContext = createContext()

const initialState = {
  title: 'Name your Item',
  desc: 'Describe your item',
  tags: [],
  imageUrl: 'https://via.placeholder.com/300',
  itemowner: {},
  created: new Date()
}

class ItemPreviewProvider extends Component {
  constructor(props) {
    super(props)
    this.state = { item: initialState }
  }

  updatePreview = item => {
    const updatedItem = { ...this.state.item, ...item }
    this.setState({ item: updatedItem })
  }

  resetPreview = () => {
    this.setState({ item: initialState })
  }

  render() {
    return (
      <ItemPreviewContext.Provider
        value={{
          state: this.state,
          updatePreview: this.updatePreview,
          resetPreview: this.resetPreview
        }}
      >
        {this.props.children}
      </ItemPreviewContext.Provider>
    )
  }
}

export default ItemPreviewProvider
