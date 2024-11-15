import './App.css'

import Header from './assets/Header'

import Footer from './assets/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './assets/Home';
import About from './assets/About';
import Contact from './assets/Contact';
import Products from './assets/Products';
import Shampoo from './assets/Shampoo';
import Feactures from './assets/Feactures';
import Htuse from './assets/Htuse';
import Testimonial from './assets/Testimonial';
import Articles from './assets/Articles';
import Notfound from './assets/Notfound';
import Cart from './assets/Cart';

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/Shampoo' element={<Shampoo/>} />
      <Route path='/Feactures' element={<Feactures/>} />
      <Route path='/Htuse' element={<Htuse/>} />
      <Route path='/Testimonial' element={<Testimonial/>} />
      <Route path='/Articles' element={<Articles/>} />
      <Route path='/Notfound' element={<Notfound/>} />
      <Route path='/Cart' element={<Cart/>} />

    </Routes>
    <Footer/>

    </BrowserRouter>
   
   
    
     
    </>
  )
}

export default App;
