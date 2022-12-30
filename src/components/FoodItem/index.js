import './index.css'

import Counter from '../Counter'

const FoodItem = props => {
  const {productDetails, onClickAddButton} = props
  const {name, cost, foodType, imageUrl, rating} = productDetails

  const onClickAdd = () => {
    onClickAddButton(productDetails)
  }

  return (
    <li className="similar-product-item">
      <img
        src={imageUrl}
        className="similar-product-image"
        alt={`similar product ${name}`}
      />
      <p className="similar-product-title">{name}</p>
      <p className="similar-products-brand">{foodType}</p>
      <div className="similar-product-price-rating-container">
        <p className="similar-product-price">Rs {cost}/-</p>
        <div className="similar-product-rating-container">
          <p className="similar-product-rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="similar-product-star"
          />
        </div>
      </div>
      <Counter />
      <button
        type="button"
        className="button add-to-cart-btn"
        onClick={onClickAdd}
      >
        ADD
      </button>
    </li>
  )
}

export default FoodItem

/*  Line 8:42:  Unknown property 'testid' found  react/no-unknown-property
 */
