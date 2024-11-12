/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Route, Routes  } from 'react-router-dom'
import Home from './pages/Home'
import Docters from './pages/Docters'
import { Login } from './pages/Login'
import About from './pages/About'
import { Contact } from 'lucide-react'
import MyProfile from './pages/MyProfile'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Routes>
        <Route path = '/' element= {<Home/>}/>
        <Route path=  '/docters ' element = {<Docters/>} />
        <Route paths = 'docters/:speciality' element = {<Docters/>} />
        <Route path=  '/login ' element = {<Login/>} />
        <Route path=  '/about ' element = {<About/>} />
        <Route path=  '/contact ' element = {<Contact/>} />
        <Route path=  '/my-profile ' element = {<MyProfile/>} />
        
      </Routes>
    </div>
  )
}

export default App
