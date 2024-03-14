import AboutUs from './components/AboutUs/AboutUs'
import Banner from './components/Banner/Banner'
import BestSeller from './components/BestSeller/BestSeller'
import CruiseTours from './components/CruiseTours/CruiseTours'
import Footer from './components/Footer/Footer'
import Info from './components/Info/Info'
import Inquiry from './components/Inquiry/Inquiry'
import MostPopular from './components/MostPopular/MostPopular'
import Navbar from './components/Navbar/Navbar'
import OurIndochina from './components/OurIndochinaTour/OurIndochina'
import ServiesNature from './components/ServiesNature/ServiesNature'
import Staffs from './components/Staffs/Staffs'
import Travelblog from './components/TraveBlog/Travelblog'
import Travel from './components/Travel/Travel'

function App() {
  return (
    <>
      <div className='relative'>
        <Info />
        <Navbar />
        <Banner />
        <BestSeller />
        <MostPopular />
        <OurIndochina />
        <CruiseTours />
        <ServiesNature />
        <Travel />
        <Staffs />
        <AboutUs />
        <Travelblog />
        <Inquiry />
        <Footer />
      </div>
    </>
  )
}

export default App
