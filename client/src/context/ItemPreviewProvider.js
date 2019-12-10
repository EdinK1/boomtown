import React, { Component, createContext } from 'react'
import * as timeago from 'timeago.js'
export const ItemPreviewContext = createContext()

const initialState = {
  itemName: 'Name your Item',
  itemDesc: 'Describe your item',
  tags: [],
  itemOwner: 'PEPE',
  created: timeago.format(new Date()),
  itemImg:
    'https://img.thedailybeast.com/image/upload/v1531451526/180712-Weill--The-Creator-of-Pepe-hero_uionjj.jpg'
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
