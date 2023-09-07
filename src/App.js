import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'
import Jeans from './pages/Jeans'
import Shirts from './pages/Shirts'
import Shoes from './pages/Shoes'

function App() {
  return (
    <div className="App">
        <Navbar />

        <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/products' element={<Products />}>
                <Route index element={<Jeans />} />
                <Route path='jeans' element={<Jeans />} />                  
                <Route path='shirts' element={<Shirts />} />
                <Route path='shoes' element={<Shoes />} />
            </Route>           


            <Route path='/about' element={<About />} />
            
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>



    </div>
  );
}

export default App;
