// import React, { useState } from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import '../App.css'
import Student from './Student'
import Add from './/Addnew';
import Edit from './Edit';


function LayoutComp() {

  return (
    <>
      <BrowserRouter>
      <div className='parent'>
      <Link to='/' id='child' >Home</Link>
      <Link to='/student' id='child'>Student</Link>
      <Link to='/contact' id='child'>Contact</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/student' element={<Student />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default LayoutComp
