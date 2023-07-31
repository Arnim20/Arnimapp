import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './component/Navbar';

// import NavLayout from './component/NavLayout';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<Navbar/>
  <div>
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="image/img2.jpg" className="d-block w-100" alt="hello" height={500}/>
    </div>
    <div className="carousel-item">
      <img src="image/datalogo.jpg" className="d-block w-100" alt="..." height={500}/>
    </div>
    <div className="carousel-item">
      <img src="image/react.png" className="d-block w-100" alt="..." height={500}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </div>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
