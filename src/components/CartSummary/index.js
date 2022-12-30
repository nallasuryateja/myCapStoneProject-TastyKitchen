import PaymentSuccessful from '../PaymentSuccessful'

import './index.css'

const CartSummary = props => {
  const {cartList} = props

  const onClickCheckOut = () => <PaymentSuccessful />

  return (
    <>
      <div className="cart-summary-container">
        <h1 className="order-total-value">
          <span className="order-total-label">Order Total:</span> Rs 100 /-
        </h1>
        <p className="total-items">{cartList.length} Items in cart</p>

        <button
          type="button"
          className="checkout-button d-sm-none"
          onClick={onClickCheckOut}
        >
          Checkout
        </button>
      </div>

      <button
        type="button"
        className="checkout-button d-lg-none"
        onClick={onClickCheckOut}
      >
        Checkout
      </button>
    </>
  )
}

export default CartSummary
