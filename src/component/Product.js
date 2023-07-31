import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import RateClass from './Rating2';
export default function Product() {
  return (
    <div className='container'>
    <div className='card mb-3'>
  <img src="image/lap.jpeg"class="card-img-top" alt="..." height={500 }/>
  <div class="card-body text-center">
    <h2 class="card-title"style={{color:"blueviolet" }}><b>Sahil Enterprices</b></h2>
    <h3 class="card-text">3300$</h3>
    <p class="card-text"><small class="text-muted"><b>Best Selling Laptop</b></small></p>
    <RateClass ratting='3'/>
  </div>
  </div>
  </div>
  )
}


