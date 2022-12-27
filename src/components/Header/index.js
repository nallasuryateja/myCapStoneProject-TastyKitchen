import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <div className="website-logo">
              <img
                src="https://res.cloudinary.com/dsfa91tmn/image/upload/v1672026027/Frame_274_ldeqfo.svg"
                alt="website logo"
              />
              <img
                src="https://res.cloudinary.com/dsfa91tmn/image/upload/v1672026027/Features_hqudif.svg"
                alt="website logo"
              />
            </div>
          </Link>
          <button type="button" className="nav-mobile-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-image"
              onClick={onClickLogout}
            />
          </button>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <div className="website-logo">
              <img
                src="https://res.cloudinary.com/dsfa91tmn/image/upload/v1672026027/Frame_274_ldeqfo.svg"
                alt="website logo"
              />
              <img
                src="https://res.cloudinary.com/dsfa91tmn/image/upload/v1672026027/Features_hqudif.svg"
                alt="website logo"
              />
            </div>
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <p>Home</p>
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/cart" className="nav-link">
              <p>Cart</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
