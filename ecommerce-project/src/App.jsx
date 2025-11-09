import { Routes, Route } from 'react-router'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { HomePage } from './pages/home/HomePage.jsx'
import { CheckoutPage } from './pages/checkout/CheckoutPage.jsx'
import { OrdersPage } from './pages/orders/OrdersPage.jsx'
import { TrackingPage } from './pages/tracking/TrackingPage.jsx'

import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getCartItems = async () => {
      const response = await axios.get('/api/cart-items?expand=product');
      setCart(response.data);
    };

    getCartItems();
  }, []);


  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage cart={cart} />} />
    </Routes>
  )
}

export default App
