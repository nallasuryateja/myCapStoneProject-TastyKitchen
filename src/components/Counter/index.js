import {Component} from 'react'

import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'

import './index.css'

class Counter extends Component {
  state = {
    quantity: 1,
  }

  onDecrementQuantity = () => {
    const {quantity} = this.state
    if (quantity > 1) {
      this.setState(prevState => ({quantity: prevState.quantity - 1}))
    }
  }

  onIncrementQuantity = () => {
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }

  render() {
    const {quantity} = this.state
    return (
      <div>
        <button type="button" onClick={this.onDecrement}>
          <BsDashSquare />
        </button>
        <div>{quantity}</div>
        <button type="button" onClick={this.onIncrement}>
          <BsPlusSquare />
        </button>
      </div>
    )
  }
}

export default Counter
