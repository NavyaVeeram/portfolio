// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Resume from './Components/Resume';
import Footer from './Components/Footer';
import ContactForm from './Components/ContactForm';
function App() {
     return(
      <>

<NavBar/>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About />}/>
  <Route path='/projects' element={<Projects />}/>
  <Route path='/skills' element={<Skills/>}/>
  <Route path='/resume' element={<Resume/>}/>
  <Route path='/contact' element={<ContactForm />}/>
</Routes>

</BrowserRouter>
<Footer />
</>
     )
  
}

export default App;
