import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {BsArrowLeftSquare, BsArrowRightSquare} from 'react-icons/bs'

import RestaurantCard from '../RestaurantCard'
import RestaurantsHeader from '../RestaurantsHeader'

import './index.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class AllRestaurantsSection extends Component {
  state = {
    productsList: [],
    apiStatus: apiStatusConstants.initial,
    activeOptionId: sortByOptions[0].value,
    limit: 9,
    offSet: 0,
    activePage: 1,
  }

  componentDidMount() {
    this.getProducts()
  }

  onClickLeftLimit = () => {
    const {activePage, limit} = this.state
    this.setState(prevState => ({activePage: prevState.activePage - 1}))
    const offset = (activePage + 1) * limit
    this.setState({offSet: offset}, this.getProducts)
  }

  onClickRightLimit = () => {
    const {activePage, limit} = this.state
    this.setState(prevState => ({activePage: prevState.activePage + 1}))
    const offset = (activePage - 1) * limit
    this.setState({offSet: offset}, this.getProducts)
  }

  getProducts = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {limit, offSet, activeOptionId} = this.state
    const apiUrl = `https://apis.ccbp.in/restaurants-list?offset=${offSet}&limit=${limit}&sort_by_rating=${activeOptionId}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.restaurants.map(each => ({
        hasOnlineDelivery: each.has_online_delivery,
        name: each.name,
        hasTableBooking: each.has_table_booking,
        isDeliveringNow: each.is_delivering_now,
        costForTwo: each.cost_for_two,
        cuisine: each.cuisine,
        imageUrl: each.image_url,
        id: each.id,
        menuType: each.menu_type,
        location: each.location,
        opensAt: each.opens_at,
        groupByTime: each.group_by_time,
        userRating: {
          ratingText: each.user_rating.rating_text,
          ratingColor: each.user_rating.rating_color,
          totalReviews: each.user_rating.total_reviews,
          rating: each.user_rating.rating,
        },
      }))
      console.log(updatedData)
      this.setState({
        productsList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  changeSortby = activeOptionId => {
    this.setState({activeOptionId}, this.getProducts)
  }

  renderFailureView = () => (
    <div className="products-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="products failure"
        className="products-failure-img"
      />
      <h1 className="product-failure-heading-text">
        Oops! Something Went Wrong
      </h1>
      <p className="products-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  )

  renderProductsListView = () => {
    const {productsList, activeOptionId, activePage} = this.state
    const shouldShowProductsList = productsList.length > 0

    return shouldShowProductsList ? (
      <div className="all-restaurants-container">
        <RestaurantsHeader
          activeOptionId={activeOptionId}
          sortByOptions={sortByOptions}
          changeSortby={this.changeSortby}
        />
        <hr className="horizontal-line" />
        <ul className="restaurants-list">
          {productsList.map(product => (
            <RestaurantCard productData={product} key={product.id} />
          ))}
        </ul>
        <div className="limit-button-container">
          <button type="button" onClick={this.onClickLeftLimit}>
            <BsArrowLeftSquare />
          </button>
          <p>
            <span>{activePage}</span> of 4
          </p>
          <button type="button" onClick={this.onClickRightLimit}>
            <BsArrowRightSquare />
          </button>
        </div>
      </div>
    ) : (
      <div className="no-products-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
          className="no-products-img"
          alt="no products"
        />
        <h1 className="no-products-heading">No Restaurants Found</h1>
        <p className="no-products-description">
          We could not find any Restaurants
        </p>
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="TailSpin" color="orange" height="50" width="50" />
    </div>
  )

  renderAllProducts = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductsListView()
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
      <div className="all-products-section">{this.renderAllProducts()}</div>
    )
  }
}

export default AllRestaurantsSection

/*  Line 150:13:  Unknown property 'testid' found  react/no-unknown-property
  Line 155:19:  Unknown property 'testid' found  react/no-unknown-property
  Line 160:13:  Unknown property 'testid' found  react/no-unknown-property
  Line 182:48:  Unknown property 'testid' found  react/no-unknown-property */
