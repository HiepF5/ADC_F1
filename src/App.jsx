import Banner from './components/Banner/Banner'
import BestSeller from './components/BestSeller/BestSeller'
import CruiseTours from './components/CruiseTours/CruiseTours'
import Info from './components/Info/Info'
import MostPopular from './components/MostPopular/MostPopular'
import Navbar from './components/Navbar/Navbar'
import OurIndochina from './components/OurIndochinaTour/OurIndochina'
import ServiesNature from './components/ServiesNature/ServiesNature'
import Staffs from './components/Staffs/Staffs'
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
      </div>
    </>
  )
}

export default App
