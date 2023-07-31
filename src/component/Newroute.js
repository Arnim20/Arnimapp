import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Portfolio from './Portfolio'
import { FirstComponent } from './FirstComponent';
import Conditonal from './Conditonal';
import CounterComp from './CounterComp';

export default function Newroute() {
  return (
    <BrowserRouter>

    <Routes>

        <Route path='/' element={<Navbar/>}>
            <Route index element={<Portfolio/>} />
            <Route index path='/portfolio' element={<Portfolio/>} />
            <Route path='/firstcomponent' element={<FirstComponent/>}/>
            <Route path='/conditional' element={<Conditonal/>}/>
            <Route path='/countercomp' element={<CounterComp/>}/>
            <Route path='/firstcomponent' element={<FirstComponent/>}/>
        </Route>


    </Routes>

    </BrowserRouter>

  );
}
