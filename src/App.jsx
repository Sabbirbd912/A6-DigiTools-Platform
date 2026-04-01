import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import StatsBanner from './components/StatsBanner/StatsBanner'
import ToolsSection from './components/ToolsSection/ToolsSection'
import Steps from './components/Steps/Steps'
import Pricing from './components/Pricing/Pricing'
import Footer from './components/Footer/Footer'
import Workflow from './components/Workflow/Workflow'
import { ToastContainer } from 'react-toastify';

function App() {
  
  const [ cart, setCart ] = useState([]);

  return (
    <>
      <Navbar cart={cart} ></Navbar>
      <Banner></Banner>
      <StatsBanner></StatsBanner>
      <ToolsSection cart={cart} setCart={setCart} ></ToolsSection>
      <Steps></Steps>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
