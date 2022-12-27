import './index.css'
import Header from '../Header'
import Footer from '../Footer'
import SliderSection from '../SliderSection'
import AllRestaurantsSection from '../AllRestaurantsSection'

const Home = () => (
  <>
    <div className="slider-header-section">
      <Header className="header" />
      <SliderSection className="slider-section" />
    </div>
    <AllRestaurantsSection />
    <Footer />
  </>
)

export default Home
