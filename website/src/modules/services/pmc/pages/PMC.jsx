import Footer from '../../../../Components/Footer'
import Navbar from '../../../../Components/Navbar'
import Pmc_Main from '../components/Pmc_Main'
import Pmc_Overview from '../components/Pmc_Overview'
import Feasibility_Main from '../components/Feasibility_Main'
import Feasibility_Overview from '../components/Feasibility_Overview'
import Advisory_Main from '../components/Advisory_Main'
import Advisory_Overview from '../components/Advisory_Overview'
import Start_Project from '../components/Start_Project'
const PMC = () => {
  return <>
  <Navbar />
  <Pmc_Main />
  <Pmc_Overview />
  <Feasibility_Main />
  <Feasibility_Overview />
  <Advisory_Main />
  <Advisory_Overview />
  <Start_Project />
  <Footer />
  </>
}

export default PMC