import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Newhome() {
  return (
  <>
    <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="image/datalogo.jpg" className="d-block w-100" alt="..." height={500}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="image/react.png" className="d-block w-100" alt="..." height={500}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="image/img2.jpg" className="d-block w-100" alt="..." height={500}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

</div>


<div className="mt-2 bg-primary" id="task"> 
                <h1 style={{color:"black"}}  className="text-center"><b><i>TASK</i></b></h1>
                <div className="row ">
                    <div className="col-md-4">
              <div className="card" >
                <img src="image/1.jpeg" className="card-img-top" alt="..." style={{height: "175px"}}/>
                <div className="card-body">
                  <h5 className="card-title"style={{textDecoration: "underline"}}><b><i>FirstComponent</i></b></h5>
                  <Link to="/firstcomponent" className="btn btn-primary">click here</Link>
                </div>
              </div>
              </div>
              
              
              <div className="col-md-4">
              <div className="card" >
                <img src="image/2.png" className="card-img-top" alt="..." style={{height: "175px"}}/>
                <div className="card-body">
                  <h5 className="card-title"style={{textDecoration: "underline"}}><b><i>Demo22</i></b></h5>
                  <Link to="/about" className="btn btn-primary">click here</Link>
                </div>
              </div>
              </div>

              <div className="col-md-4">
              <div className="card" >
                <img src="image/3.webp" className="card-img-top" alt="..." style={{height: "175px"}}/>
                <div className="card-body">
                  <h5 className="card-title"style={{textDecoration: "underline"}}><b><i>Inlinecss</i></b></h5>
                  <Link to="/style" className="btn btn-primary">click here</Link>
                </div>
              </div>
              </div>
              </div>
  

              <div className="row mt-3">
                    <div className="col-md-4">
              <div className="card" >
                <img src="image/4.png" className="card-img-top" alt="..." style={{height: "175px"}}/>
                <div className="card-body">
                  <h5 className="card-title"style={{textDecoration: "underline"}}><b><i>Gallery</i></b></h5>
                  <Link to="/gallary" className="btn btn-primary">click here</Link>
                </div>
              </div>
              </div>

              <div className="col-md-4">
              <div className="card" >
                <img src="image/5.jpg" className="card-img-top" alt="..." style={{height: "175px"}}/>
                <div className="card-body">
                  <h5 className="card-title"style={{textDecoration: "underline"}}><b><i>Task</i></b></h5>
                  <Link to="/task" className="btn btn-primary">click here</Link>
                </div>
              </div>
              </div>

              <div className="col-md-4">
              <div className="card" >
                <img src="image/6.jpeg" className="card-img-top" alt="..." style={{height: "175px"}}/>
                <div className="card-body">
                  <h5 className="card-title"style={{textDecoration: "underline"}}><b><i>Time Table</i></b></h5>
                  <Link to="" className="btn btn-primary">click here</Link>
                </div>
              </div>
              </div>

              </div>
 
              <div className="row mt-3">
                    <div className="col-md-4">
              <div className="card" >
                <img src="image/7.jpg" className="card-img-top" alt="..." style={{height: "175px"}}/>
                <div className="card-body">
                  <h5 className="card-title"style={{textDecoration: "underline"}}><b><i>Product</i></b></h5>
                  <Link to="/product" className="btn btn-primary">click here</Link>
                </div>
              </div>
              </div>

              <div className="col-md-4">
              <div className="card" >
                <img src="image/8.jpeg" className="card-img-top" alt="..." style={{height: "175px"}}/>
                <div className="card-body">
                  <h5 className="card-title"style={{textDecoration: "underline"}}><b><i>Counter</i></b></h5>
                  <Link to="/countercomp" className="btn btn-primary">click here</Link>
                </div>
              </div>
              </div>

              <div className="col-md-4">
              <div className="card" >
                <img src="image/9.jpeg" className="card-img-top" alt="..." style={{height: "175px"}}/>
                <div className="card-body">
                  <h5 className="card-title"style={{textDecoration: "underline"}}><b><i>Local Storage</i></b></h5>
                  <Link to="/localstorage" className="btn btn-primary">click here</Link>
                </div>
              </div>
              </div>
              
              </div>


              <div className="row mt-3">
                    <div className="col-md-4">
              <div className="card" >
                <img src="image/10.png" className="card-img-top" alt="..." style={{height: "175px"}}/>
                <div className="card-body">
                  <h5 className="card-title"style={{textDecoration: "underline"}}><b><i>Todo list</i></b></h5>
                  <Link to="/tododisplay" className="btn btn-primary">click here</Link>
                </div>
              </div>
              </div>
              </div>
             
                        
</div>
</div> 
  </>
  )
}