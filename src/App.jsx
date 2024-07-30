import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
// import About from './components/About'
import { Navbar } from './components/Navbar'
import { Products } from './components/Products'
import { New } from './components/New'
import { Featured } from './components/Featured'
import { OrderSummary } from './components/OrderSummary'
import { NoMatch } from './components/NoMatch'
import { UserDetails } from './components/UserDetails'
import { Users } from './components/Users'
const LazyAbout = React.lazy(() => import('./components/About'))

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={
        <React.Suspense fallback="Loading...">
          <LazyAbout/>
        </React.Suspense>
      }/>
      <Route path='order-summary' element={<OrderSummary/>}/>
      <Route path='products' element={<Products/>}>
        <Route index element={<Featured/>}/>
        <Route path='new' element={<New/>}/>
        <Route path='featured' element={<Featured/>}/>
      </Route>
      <Route path='users' element={<Users/>}>
        <Route path=':userId' element={<UserDetails/>}/>
      </Route>
      <Route path='*' element={<NoMatch/>}/>
    </Routes>
    </>
  )
}

export default App
