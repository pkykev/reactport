import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/footer';
import AboutMe from './components/Aboutme';
import Contact from './components/contact';

function App() {
  const [location, setLocation] = useState('AboutMe')

  return (
    <>
      <Header location={location} setLocation={setLocation}/>
      <h1>{location}</h1>
      {location === 'AboutMe' && <AboutMe></AboutMe>}
      {location === 'Contact' && <Contact></Contact>}


      <Footer/>
    </>
  )
}

export default App
