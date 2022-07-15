import { Routes, Route } from 'react-router-dom'

import Layout from './Layout/Layout'
import AboutUs from './Pages/AboutUs/AboutUs'
import Cart from './Pages/Cart/Cart'
import Detail from './Pages/Detail/Detail'
import Home from './Pages/Home/Home'
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
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App