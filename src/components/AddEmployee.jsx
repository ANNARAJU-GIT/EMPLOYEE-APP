import React from 'react'

import Navbar from './Navbar'

const AddEmployee = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://media.istockphoto.com/id/1166811341/photo/everything-weve-been-working-on-will-come-to-light-soon.webp?b=1&s=170667a&w=0&k=20&c=o5eVNBYnLFRIJ7nenf3c7mxYH1dQ-lWi_ECp0jqvgxM=" class="d-block w-100" alt="https://media.istockphoto.com/id/1166811341/photo/everything-weve-been-working-on-will-come-to-light-soon.webp?b=1&s=170667a&w=0&k=20&c=o5eVNBYnLFRIJ7nenf3c7mxYH1dQ-lWi_ECp0jqvgxM=" />
                </div>
                <div class="carousel-item">
                  <img src="https://media.istockphoto.com/id/1166811341/photo/everything-weve-been-working-on-will-come-to-light-soon.webp?b=1&s=170667a&w=0&k=20&c=o5eVNBYnLFRIJ7nenf3c7mxYH1dQ-lWi_ECp0jqvgxM=" class="d-block w-100" alt="https://media.istockphoto.com/id/1166811341/photo/everything-weve-been-working-on-will-come-to-light-soon.webp?b=1&s=170667a&w=0&k=20&c=o5eVNBYnLFRIJ7nenf3c7mxYH1dQ-lWi_ECp0jqvgxM=" />
                </div>
                <div class="carousel-item">
                  <img src="https://media.istockphoto.com/id/1166811341/photo/everything-weve-been-working-on-will-come-to-light-soon.webp?b=1&s=170667a&w=0&k=20&c=o5eVNBYnLFRIJ7nenf3c7mxYH1dQ-lWi_ECp0jqvgxM=" class="d-block w-100" alt="https://media.istockphoto.com/id/1166811341/photo/everything-weve-been-working-on-will-come-to-light-soon.webp?b=1&s=170667a&w=0&k=20&c=o5eVNBYnLFRIJ7nenf3c7mxYH1dQ-lWi_ECp0jqvgxM=" />
                </div>
              </div>
            </div>
            <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <p><b><h2>NEW EMPLOYEE REGISTRATION</h2></b></p>
          </div>
          </div>
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                <label htmlFor="" className="form-label">NAME</label>
                <input type="text" className="form-control" />

              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">address</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">date of birth</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">employee no</label>
                <input type="number" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">e mail</label>
                <input type="email" className="form-control" />


              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">phone number</label>
                <input type="number" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button className="btn btn-success">submit</button>


              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default AddEmployee