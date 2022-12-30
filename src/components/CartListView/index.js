import {Component} from 'react'

import CartItem from '../CartItem'

import './index.css'

const cartData = [
  {
    cost: 345,
    quantity: 2,
    id: 'c3b24b72-3356-4c26-a2cf-8379eb9053cd',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/tasty-kitchens/food-items-2/chicken-salad-16.jpg',
    name: 'Chicken Salad',
  },
  {
    cost: 345,
    quantity: 2,
    id: 'c3b24b72-3356-4c26-a2cf-8379eb9053cr',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/tasty-kitchens/food-items-2/chicken-salad-16.jpg',
    name: 'Chicken Salad',
  },
]

class CartListView extends Component {
  state = {
    cartList: cartData,
  }

  render() {
    const {cartList} = this.state
    return (
      <ul className="cart-list">
        {cartList.map(eachCartItem => (
          <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
        ))}
      </ul>
    )
  }
}

export default CartListView
