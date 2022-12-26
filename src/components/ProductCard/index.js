import {Link} from 'react-router-dom'

import './index.css'

const ProductCard = props => {
  const {productData} = props
  const {imageUrl, name, cuisine, id, userRating} = productData
  const {rating} = userRating

  return (
    <li className="product-item">
      <Link to={`/products/${id}`} className="link-item">
        <img src={imageUrl} alt="product" className="restaurent-image" />
        <div>
          <h1 className="title">{name}</h1>
          <p className="brand">{cuisine}</p>
          <p>{rating}</p>
        </div>
      </Link>
    </li>
  )
}
export default ProductCard
