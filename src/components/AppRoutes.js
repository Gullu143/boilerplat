import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import NotFound from './NotFound';
import SideBar from './SideBar';
import Login from '../pages/Login';

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element= {< Home />} />
        <Route path='/sidebar' element= {< SideBar />} />
        <Route path='*' element= {< NotFound />} />
        <Route path='/sidebar' element= {< SideBar />} />
        <Route path='/login' element= {< Login />} />
        <Route path='/Register' element= {< SignUp />} />
      </Routes>
    </div>
  )
}
