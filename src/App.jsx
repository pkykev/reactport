import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// these can be combined into on import by making an index in components and exporting all from there
import Header from './components/header';
import Footer from './components/footer';
import AboutMe from './components/Aboutme';
import Contact from './components/contact';
import Portfolio from './components/Project';


function App() {
  const [location, setLocation] = useState('AboutMe')

  return (
    <>
      <Header location={location} setLocation={setLocation}/>
      <h1>{location}</h1>
      {location === 'AboutMe' && <AboutMe></AboutMe>}
      {location === 'Contact' && <Contact></Contact>}
      {location === 'Portfolio' && <Portfolio></Portfolio>}


      <Footer/>
    </>
  )
}

export default App
