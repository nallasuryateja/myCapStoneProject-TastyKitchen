import {Component} from 'react'

import {
  FaPinterestSquare,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa'

import './index.css'

class Footer extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/dsfa91tmn/image/upload/v1672026027/Frame_274_ldeqfo.svg"
            alt="website-footer-logo"
            className="logo-sub"
          />
          <h1 className="logo-heading">Tasty Kitchen</h1>
        </div>
        <div className="para-container">
          <p className="para">
            The only thing we are serious about is food. Contact us on
          </p>
        </div>

        <div className="icon-container">
          <ul className="icons-list">
            <li>
              <FaPinterestSquare
                className="icon"
                testid="pintrest-social-icon"
              />
            </li>
            <li>
              <FaInstagram className="icon" testid="instagram-social-icon" />
            </li>
            <li>
              <FaTwitter className="icon" testid="twitter-social-icon" />
            </li>
            <li>
              <FaFacebookSquare
                className="icon"
                testid="facebook-social-icon"
              />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer

/* pintrest-social-icon 


instagram-social-icon

facebook-social-icon
twitter-social-icon
*/
