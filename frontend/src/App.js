import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import ShopItem from './Pages/ShopCategory';
import Shop from './Pages/Shop'
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Component/Footer/Footer';
import men_banner from './Component/Assets/banner_mens.png';
import woman_banner from './Component/Assets/banner_women.png';
import kid_banner from './Component/Assets/banner_kids.png';
import mencat from './Subcagory/subcateman'
import Cancle from './Pages/Cancle';
import LatestCollectionspage from './Pages/LatestCollectionspage';
import Exclusiveoffer from './Pages/Exclusiveoffer';
import OrderProduct from './Pages/OrderProduct/OrderProduct';
import Loginregister from './Component/Loginregster/Loginregister';
import Success from './Component/Success/Success';


function App() {
  return (
    <>
     <Navbar />
      <div className='app'>   
          <Routes>
            <Route path="/order" element={<OrderProduct />} />
          </Routes>
          <Routes>
            <Route path='/offers' element={<Exclusiveoffer />} />
          </Routes>
          <Routes >
            <Route path='/latestcollection' element={<LatestCollectionspage />} />
            <Route path='/success' element={<Success/>} />
            <Route path='/cancle' element={Cancle} />
          </Routes>
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/mens' element={<ShopItem banner={men_banner} subcate={mencat} category="men" />} />
            <Route path='/womens' element={<ShopItem banner={woman_banner} category="women" />} />
            <Route path='/kids' element={<ShopItem banner={kid_banner} category="kid" />} />

            <Route path='/Product' element={<Product />}>
              <Route path=":ProductId" element={<Product />} />
            </Route>
             <Route path='/login' element={<Loginregister />} /> 
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
      </div>
    </>
  );
}

export default App;