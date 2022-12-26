import {Component} from 'react'

import './index.css'

class Footer extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/dsfa91tmn/image/upload/v1672026027/Frame_274_ldeqfo.svg"
            alt="hat"
          />
          <img
            src="https://res.cloudinary.com/dsfa91tmn/image/upload/v1672026027/Features_hqudif.svg"
            alt="title"
          />
        </div>
        <p className="para">
          The only thing we serious about is food.Contact us on
        </p>

        <div>
          <ul className="icons-list">
            <li>
              <p>P</p>
            </li>
            <li>
              <p>I</p>
            </li>
            <li>
              <p>T</p>
            </li>
            <li>
              <p>F</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
