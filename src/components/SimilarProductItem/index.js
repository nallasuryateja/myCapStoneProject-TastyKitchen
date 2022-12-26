import './index.css'

const SimilarProductItem = props => {
  const {productDetails} = props
  const {name, cost, foodType, imageUrl, rating} = productDetails

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
      <button type="button" className="button add-to-cart-btn">
        ADD TO CART
      </button>
    </li>
  )
}

export default SimilarProductItem
