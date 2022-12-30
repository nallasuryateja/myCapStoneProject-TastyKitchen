import {Link} from 'react-router-dom'

import './index.css'

const EmptyCartView = () => (
  <div className="cart-empty-view-container">
    <img
      src="https://res.cloudinary.com/dsfa91tmn/image/upload/v1672312774/cooking_1_hyi14r.svg"
      className="cart-empty-img"
      alt="cart empty"
    />
    <h1 className="cart-empty-heading">No Orders Yet!</h1>
    <p>Your cart is empty. Add something from the menu.</p>

    <Link to="/">
      <button type="button" className="order-now-btn">
        Order Now
      </button>
    </Link>
  </div>
)

export default EmptyCartView
