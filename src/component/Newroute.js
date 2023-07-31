import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Portfolio from './Portfolio'
import { FirstComponent } from './FirstComponent';
import Conditonal from './Conditonal';
import CounterComp from './CounterComp';
import { Gallary,Profile } from './Gallary';
import Tododisplay from './Tododisplay';
import Style from './Style';
import LocalStorage from './LocalStorage';

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
            <Route path='/gallary' element={<Gallary/>}/>
            <Route path='/tododisplay' element={<Tododisplay/>}/>
            <Route path='/style' element={<Style/>}/>
            <Route path='/localstorage' element={<LocalStorage/>}/>

        </Route>


    </Routes>

    </BrowserRouter>

  );
}
