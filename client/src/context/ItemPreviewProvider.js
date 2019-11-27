import React, { Component, createContext, Children } from 'react'

export const ItemPreviewContext = createContext()

const initialState = {
  itemName: 'Name your Item',
  itemDesc: 'Describe your item',
  tags: [],
  itemImg: 'https://via.placeholder.com/300',
  itemowner: {},
  created: new Date()
}

class ItemPreviewProvider extends Component {
  constructor(props) {
    super(props)
    this.state = { item: initialState }
  }

  updatePreview = (name, value) => {
    this.setState(state => ({ item: { ...state.item, [name]: value } }))
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
