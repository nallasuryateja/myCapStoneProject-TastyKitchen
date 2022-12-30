import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'

import './index.css'
import FoodItem from '../FoodItem'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class RestaurantFoodItemDetails extends Component {
  state = {
    productData: {},
    similarProductsData: [],
    apiStatus: apiStatusConstants.initial,
    cartItems: [],
  }

  componentDidMount() {
    this.getProductData()
  }

  onClickAddButton = recipe => {
    const {cartItems} = this.state
    const updatedCart = [...cartItems, recipe]
    this.setState({cartItems: updatedCart})
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  getFormattedData = data => ({
    rating: data.rating,
    id: data.id,
    name: data.name,
    costForTwo: data.cost_for_two,
    cuisine: data.cuisine,
    imageUrl: data.image_url,
    reviewsCount: data.reviews_count,
    opensAt: data.opens_at,
    location: data.location,
    itemsCount: data.items_count,
  })

  getProductData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/restaurants-list/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = this.getFormattedData(fetchedData)
      const updatedSimilarProductsData = fetchedData.food_items.map(each => ({
        name: each.name,
        cost: each.cost,
        foodType: each.food_type,
        imageUrl: each.image_url,
        id: each.id,
        rating: each.rating,
      }))
      this.setState({
        productData: updatedData,
        similarProductsData: updatedSimilarProductsData,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status === 404) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <div className="products-details-loader-container">
      <Loader type="TailSpin" color="orange" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="product-details-failure-view-container">
      <img
        alt="failure view"
        src="https://res.cloudinary.com/dsfa91tmn/image/upload/v1672052970/myCapstoneProject/erroring_1_mkmltm.svg"
        className="failure-view-image"
      />
      <h1 className="product-not-found-heading">Product Not Found</h1>
      <Link to="/products">
        <button type="button" className="button">
          Continue Shopping
        </button>
      </Link>
    </div>
  )

  onDecrementQuantity = () => {
    const {quantity} = this.state
    if (quantity > 1) {
      this.setState(prevState => ({quantity: prevState.quantity - 1}))
    }
  }

  onIncrementQuantity = () => {
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }

  renderProductDetailsView = () => {
    const {productData, similarProductsData} = this.state
    const {
      rating,
      name,
      costForTwo,
      cuisine,
      imageUrl,
      reviewsCount,
      location,
    } = productData

    return (
      <div className="product-details-success-view">
        <div className="product-details-container">
          <img src={imageUrl} alt="restaurant" className="product-image" />
          <div>
            <h1>{name}</h1>
            <p>{cuisine}</p>
            <p>{location}</p>
            <div>
              <p>{rating}</p>
              <p>{reviewsCount}</p>
            </div>
            <br />
            <div>
              <p>{costForTwo}</p>
              <p>Cost for two</p>
            </div>
          </div>
        </div>
        <h1 className="similar-products-heading"> Food Items</h1>
        <ul className="similar-products-list">
          {similarProductsData.map(eachSimilarProduct => (
            <FoodItem
              productDetails={eachSimilarProduct}
              key={eachSimilarProduct.id}
              onClickAddButton={this.onClickAddButton}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderProductDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductDetailsView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="product-item-details-container">
          {this.renderProductDetails()}
        </div>
      </>
    )
  }
}

export default RestaurantFoodItemDetails

/* Line 80:56:   Unknown property 'testid' found  react/no-unknown-property
  Line 158:17:  Unknown property 'testid' found  react/no-unknown-property
  Line 167:17:  Unknown property 'testid' found  react/no-unknown-property 
    Line 86:7:  Unknown property 'testid' found  react/no-unknown-property */
