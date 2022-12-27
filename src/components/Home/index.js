import './index.css'
import Header from '../Header'
import Footer from '../Footer'
import SliderSection from '../SliderSection'
import AllProductsSection from '../AllProductsSection'

const Home = () => (
  <>
    <div className="slider-header-section">
      <Header />
      <SliderSection classNAme="slider-section" />
    </div>

    <AllProductsSection />
    <Footer />
  </>
)

export default Home
