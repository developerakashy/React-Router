import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { Products } from './components/Products'
import { New } from './components/New'
import { Featured } from './components/Featured'
import { OrderSummary } from './components/OrderSummary'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='order-summary' element={<OrderSummary/>}/>
      <Route path='products' element={<Products/>}>
        <Route index element={<Featured/>}/>
        <Route path='new' element={<New/>}/>
        <Route path='featured' element={<Featured/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
