import Footer from '../../../components/Footer'
import MainPage from '../components/MainPage'
import Epcm from '../components/Epcm'
import Slnko_full_form from '../components/Slnko_full_form'
import Services from '../components/Services'
import About_Slnko from '../components/About_Slnko'
import Presence from '../components/Presence'
import Projects_Delivered from '../components/Projects_Delivered'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return <>
  <MainPage />
  <Epcm />
  <Slnko_full_form />
  <Services />
  <About_Slnko />
  <Presence />
  <Projects_Delivered />
  <Testimonials />
  <Footer />
  </>
}

export default Home