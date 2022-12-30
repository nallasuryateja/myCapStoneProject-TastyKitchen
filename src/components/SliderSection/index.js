import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import SimpleSlider from '../SimpleSlider'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class SliderSection extends Component {
  state = {
    offers: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getOffers()
  }

  getOffers = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/restaurants-list/offers'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.offers.map(each => ({
        id: each.id,
        imageUrl: each.image_url,
      }))
      this.setState({
        offers: updatedData,
        apiStatus: apiStatusConstants.success,
      })
      console.log(updatedData)
    }
    if (response.status === 401) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderSliderOffersView = () => {
    const {offers} = this.state
    return (
      <ul>
        <SimpleSlider primeDeals={offers} />
      </ul>
    )
  }

  renderSliderFailureView = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
      alt="register prime"
      className="register-prime-img"
    />
  )

  renderLoadingView = () => (
    <div className="slider-loader-container">
      <Loader type="TailSpin" color="orange" height="50" width="50" />
    </div>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSliderOffersView()
      case apiStatusConstants.failure:
        return this.renderSliderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }
}

export default SliderSection

/* Line 80:7:  Unknown property 'testid' found  react/no-unknown-property */
