import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {
    Home,
    Layout,
    ProductList,
    Details,
    Cart,
    News,
    Contact,
    Checkout
} from './screens'
export default function App() {
  return (
  <>
  <Routes>
    <Route exact path={'/'} element={<Layout/>}>
      <Route exact path='' element={<Home/>}/>
      <Route path='product' element={<ProductList/>}/>
      <Route path='product/:id' element={<Details/>}/>
      <Route path='cart/:id' element={<Cart/>}/>
      <Route path='auto-news' element={<News/>}/>
      <Route path='avada/contact' element={<Contact/>}/>
      <Route path='checkout' element={<Checkout/>}/>
    </Route>
  </Routes>
  </>
  )
}

