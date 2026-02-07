import './App.css'
import {Button} from './components/ui/button'
import Card from './components/ui/card'
import { Heading } from './Heading'
import Footer from './components/ui/Footer'
import Intro1 from './components/ui/Intro1'
import Intro2 from './components/ui/Intro2'
import Intro3 from './components/ui/Intro3'
import Nav from './components/ui/Nav'
import Promo from './components/ui/Promo'
import Layout from './components/ui/Layout'

function App() {

 return (
  <>
  <Layout>
    <Card h2="Buenas noches"/>
  <Heading name="Saul" age={12}/>
  <Nav/>
  <Card/>    
  <Footer/>
  <Intro1/>
  <Intro2/>
  <Intro3/>
  <Promo/>
  </Layout>
  </>
 )
 
  

}

export default App
