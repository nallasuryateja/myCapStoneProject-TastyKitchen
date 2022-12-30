import {Component} from 'react'

import Header from '../Header'
import EmptyCartView from '../EmptyCartView'
import CartListView from '../CartListView'
import CartSummary from '../CartSummary'

import './index.css'

class Cart extends Component {
  state = {
    showEmptyView: false,
    cartList: {},
  }

  render() {
    const {showEmptyView, cartList} = this.state
    return (
      <>
        <Header />
        <div className="cart-container">
          {showEmptyView ? (
            <EmptyCartView />
          ) : (
            <div className="cart-content-container">
              <h1 className="cart-heading">My Cart</h1>
              <button type="button" className="remove-all-btn">
                Remove All
              </button>
              <CartListView />
              <CartSummary cartList={cartList} />
            </div>
          )}
        </div>
      </>
    )
  }
}

export default Cart
