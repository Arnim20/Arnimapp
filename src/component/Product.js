import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import RateClass from './Rating2';
export default function Product() {
  return (
    <div className='container'>
    <div className='card mb-3'>
  <img src="image/koenigsegg agera r.jpeg"class="card-img-top" alt="..." height={500 }/>
  <div class="card-body text-center">
    <h2 class="card-title"style={{color:"blueviolet" }}><b>Koenigsegg</b></h2>
    <h3 class="card-text">$1,500,000</h3>
    <p class="card-text"><small class="text-muted"><b>HYPERCAR</b></small></p>
    <RateClass ratting='5'/>
  </div>
  </div>
  </div>
  )
}


