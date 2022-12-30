import {Link} from 'react-router-dom'

import './index.css'

const RestaurantCard = props => {
  const {productData} = props
  const {imageUrl, name, cuisine, id, userRating} = productData
  const {rating} = userRating

  return (
    <li className="restaurant-item">
      <Link to={`/restaurant/${id}`} className="link-item">
        <img src={imageUrl} alt="restaurant" className="restaurant-image" />
        <div>
          <h1 className="name">{name}</h1>
          <p className="brand">{cuisine}</p>
          <div className="rating-container">
            <img
              src="https://res.cloudinary.com/dsfa91tmn/image/upload/v1672155253/myCapstoneProject/7_Rating_zb49zg.svg"
              alt="star"
              className="star"
            />
            <p>{rating}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default RestaurantCard
