import { Routes, Route } from 'react-router-dom'

import Layout from './Layout/Layout'
import AboutUs from './Pages/AboutUs/AboutUs'
import Cart from './Pages/Cart/Cart'
import CheckOut from './Pages/CheckOut/CheckOut'
import Detail from './Pages/Detail/Detail'
import Favs from './Pages/Favs/Favs'
import Home from './Pages/Home/Home'
import MyAccount from './Pages/MyAccount/MyAccount'
import NotFound from './Pages/NotFound/NotFound'
import Shop from './Pages/Shop/Shop'

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<Detail />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkOut" element={<CheckOut />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
