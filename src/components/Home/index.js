import './index.css'
import Header from '../Header'
import Footer from '../Footer'
import SliderSection from '../SliderSection'
import AllRestaurantsSection from '../AllRestaurantsSection'

const Home = () => (
  <div>
    <Header className="header" />
    <SliderSection className="slider-section" />
    <AllRestaurantsSection />
    <Footer />
  </div>
)

export default Home
