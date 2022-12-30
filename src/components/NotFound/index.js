import {Link, withRouter} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://res.cloudinary.com/dsfa91tmn/image/upload/v1672052970/myCapstoneProject/erroring_1_mkmltm.svg"
      alt="not found"
      className="not-found-img"
    />
    <h1>Page Not Found</h1>
    <p>
      We are sorry, the page you requested could not be found. Please go back to
      the homepage
    </p>
    <Link to="/">
      <button type="button">Home Page</button>
    </Link>
  </div>
)

export default withRouter(NotFound)
