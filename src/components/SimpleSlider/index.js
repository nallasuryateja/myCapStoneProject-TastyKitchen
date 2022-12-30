import {Component} from 'react'
import Slider from 'react-slick'

import './index.css'

export default class SimpleSlider extends Component {
  render() {
    const {primeDeals} = this.props
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <li>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img
              src={primeDeals[0].imageUrl}
              alt="offer"
              className="caro-image"
            />
          </div>
          <div>
            <img
              src={primeDeals[1].imageUrl}
              alt="offer"
              className="caro-image"
            />
          </div>
          <div>
            <img
              src={primeDeals[2].imageUrl}
              alt="offer"
              className="caro-image"
            />
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </li>
    )
  }
}
