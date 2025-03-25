import './App.css';
import '../src/style.css'
import Header from './shared/Header';
import Home from './Home';
import Footer from './shared/Footer';
import WishList from './WishList';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
function App() {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/wishlist' element={<WishList />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
}

export default App;
