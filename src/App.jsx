import React, { useEffect } from 'react'
import AllNavbar from './public/components/AllNavbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicLayout from './public/PublicLayout'
import Home from './public/pages/Home'
import Heating_service from './public/pages/Heating_service'
import Plumbing_repair from './public/pages/Plumbing_repair'
import Shop from './public/pages/Shop'
import Shopmain from './public/pages/Shopmain'


const App = () => {

  return <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />} >
          <Route index element={<Home />} />
          <Route path="heating" element={<Heating_service />} />
          <Route path="plumbing" element={<Plumbing_repair />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shopmain" element={<Shopmain />} />

        </Route>

        {/* <Route path="/admin" element={<Protected compo={<AdminLayout />} />} >
          <Route index element={< AdminHome />} />
          <Route path="adminboard" element={<Dashboard />} />
          <Route path="allusers" element={<AllUsers />} />
        </Route> */}

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter >


    {/* TOP NAV BAR */}
    {/* END  TOP NAV BAR */}
    {/* <br /> */}

    {/* SECOND NAV BAR */}

    {/* END SECOND NAV BAR */}
    {/* <br /> */}

    {/* THIRD NAV BAR AND CARSOUL */}




    {/*END THIRD NAV BAR AND CARSOUL */}


    {/* FOUR SERVIES BAR*/}

    {/* FOUR SERVIES BAR*/}

    {/* <br /> */}

    {/* CLIENT BAR CARSOUL*/}
    {/* <div id="carouselExampleDark" className="carousel carousel-dark slide" >
      <div className="carousel-indicators mt-5">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="500">
          <section className="home-testimonial bg-light">
            <div className="container-fluid">
              <div className="row d-flex justify-content-center">
                <div className="col-md-12 pt-4 d-flex justify-content-center">
                  <h3>Client Testimonials</h3>
                </div>
                <div className="col-md-12 d-flex justify-content-center">
                  <h2>Explore the experience</h2>
                </div>
              </div>
              <section className="home-testimonial-bottom">
                <div className="container testimonial-inner">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-4 style-3">
                      <div className="tour-item ">
                        <div className="tour-desc bg-white">
                          <div className="card mt-2">
                            <div className="card-body">
                              <h1 className='text-center fw-bold' ><i className="bi bi-quote"></i></h1>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae doloribus, praesentium earum eaque eius beatae temporibus saepe illo numquam quam soluta possimus laboriosam illum sapiente</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 style-3">
                      <div className="tour-item ">
                        <div className="tour-desc bg-white">
                          <div className="card mt-2">

                            <div className="card-body">
                              <h1 className='text-center fw-bold' ><i className="bi bi-quote"></i></h1>
                              <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae doloribus, praesentium earum eaque eius beatae temporibus saepe illo numquam quam soluta possimus laboriosam illum sapiente</p>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 style-3">
                      <div className="tour-item ">
                        <div className="tour-desc bg-white">
                          <div className="card mt-2">
                            <div className="card-body">
                              <h1 className='text-center fw-bold' ><i className="bi bi-quote"></i></h1>
                              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae doloribus, praesentium earum eaque eius beatae temporibus saepe illo numquam quam soluta possimus laboriosam illum sapiente </p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
        <div className="carousel-item active" data-bs-interval="500">
          <section className="home-testimonial bg-light">
            <div className="container-fluid">
              <div className="row d-flex justify-content-center">
                <div className="col-md-12 pt-4 d-flex justify-content-center">
                  <h3>Client Testimonials</h3>
                </div>
                <div className="col-md-12 d-flex justify-content-center">
                  <h2>Explore the experience</h2>
                </div>
              </div>
              <section className="home-testimonial-bottom">
                <div className="container testimonial-inner">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-4 style-3">
                      <div className="tour-item ">
                        <div className="tour-desc bg-white">
                          <div className="card mt-2">
                            <div className="card-body">
                              <h1 className='text-center fw-bold' ><i className="bi bi-quote"></i></h1>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae doloribus, praesentium earum eaque eius beatae temporibus saepe illo numquam quam soluta possimus laboriosam illum sapiente</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 style-3">
                      <div className="tour-item ">
                        <div className="tour-desc bg-white">
                          <div className="card mt-2">

                            <div className="card-body">
                              <h1 className='text-center fw-bold' ><i className="bi bi-quote"></i></h1>
                              <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae doloribus, praesentium earum eaque eius beatae temporibus saepe illo numquam quam soluta possimus laboriosam illum sapiente</p>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 style-3">
                      <div className="tour-item ">
                        <div className="tour-desc bg-white">
                          <div className="card mt-2">
                            <div className="card-body">
                              <h1 className='text-center fw-bold' ><i className="bi bi-quote"></i></h1>
                              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae doloribus, praesentium earum eaque eius beatae temporibus saepe illo numquam quam soluta possimus laboriosam illum sapiente </p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>

    </div> */}
    {/* CLIENT BAR CARSOUL*/}

    {/* <br /> */}
    {/* <div style={{ backgroundColor: "rgb(0,39,70)" }}>
      <div className="container">
        <br />
        <br />
        <h1 className='text-center text-white'>Our Protection Plans</h1>
        <p className='text-center text-white'>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna.
          <br />  Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros.</p>
        <br />
        <br />
        <br />
        <div className="row ">
          <div className="col-sm-4 col-lg-3  offset-lg-1   ">
            <div className='d-flex gap-2 align-self-center   text-warning fw-bold'>
              <h2><i className="bi bi-menu-down"></i></h2>
              <p className='fs-5 mt-1'>HEATING SYSTEM</p>
            </div>
            <hr className='text-white' />
            <div className='d-flex gap-2 align-self-center text-warning fw-bold'>
              <h2><i className="bi bi-fan"></i></h2>
              <p className='fs-5 mt-1'>AIR CONDITIONING SYSTEM</p>
            </div>
            <hr className='text-white' />
            <div className='d-flex gap-2 align-self-center text-warning fw-bold'>
              <h2><i className="bi bi-magnet"></i></h2>
              <p className='fs-5 mt-1'>PLUMBING SYSTEM</p>
            </div>
            <hr className='text-white' />
          </div>

          <div className="col-sm-8 ">
            <div className="row">
              <div className="col-lg-4 mt-4">
                <div className="card mt-1">
                  <div className="card-body">
                    <h4 className='fw-bold'>Standard</h4>
                    <h1 className='text-info fw-bold'>$159</h1>
                    <p>per Year</p>
                    <div className='d-flex gap-2'>
                      <h5><i className="bi bi-check-circle text-primary"></i></h5>
                      <p className=''>Yearly Inspection & Maintenance</p>
                    </div>
                    <div className='d-flex gap-2'>
                      <h5><i className="bi bi-check-circle text-primary"></i></h5>
                      <p className=''>Yearly Inspection & Maintenance</p>
                    </div>
                    <div className='d-flex gap-2'>
                      <h5><i className="bi bi-check-circle text-primary"></i></h5>
                      <p className=''>Yearly Inspection & Maintenance</p>
                    </div>
                    <br />
                    <div className='text-center'>
                      <button type="button" className="btn btn-warning btn-sm ">BUY NOW</button>
                    </div>

                  </div>
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className="card mt-1">
                  <div className="card-body">
                    <button type="button" className="btn btn-danger btn-sm text-center">POPULAR</button>
                    <h4 className='fw-bold text-success mt-2'>Basic</h4>
                    <h1 className='text-primary fw-bold'>$159</h1>
                    <p>per Year</p>
                    <div className='d-flex gap-2'>
                      <h5><i className="bi bi-check-circle text-primary"></i></h5>
                      <p className=''>Yearly Inspection & Maintenance</p>
                    </div>
                    <div className='d-flex gap-2'>
                      <h5><i className="bi bi-check-circle text-primary"></i></h5>
                      <p className=''>Yearly Inspection & Maintenance</p>
                    </div>
                    <div className='d-flex gap-2'>
                      <h5><i className="bi bi-check-circle text-primary"></i></h5>
                      <p className=''>Yearly Inspection & Maintenance</p>
                    </div>
                    <div className='d-flex gap-2'>
                      <h5><i className="bi bi-check-circle text-primary"></i></h5>
                      <p className=''>Yearly Inspection & Maintenance</p>
                    </div>
                    <br />
                    <div className='text-center'>
                      <button type="button" className="btn btn-warning btn-sm ">BUY NOW</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mt-4">
                <div className="card mt-1">
                  <div className="card-body">
                    <h4 className='text-info fw-bold'>Deluex</h4>
                    <h1 className='text-danger fw-bold'>₹ 500</h1>
                    <p>per Year</p>
                    <div className='d-flex gap-2'>
                      <h5><i className="bi bi-check-circle text-primary"></i></h5>
                      <p className=''>Yearly Inspection & Maintenance</p>
                    </div>
                    <div className='d-flex gap-2'>
                      <h5><i className="bi bi-check-circle text-primary"></i></h5>
                      <p className=''>Yearly Inspection & Maintenance</p>
                    </div>
                    <div className='d-flex gap-2'>
                      <h5><i className="bi bi-check-circle text-primary"></i></h5>
                      <p className=''>Yearly Inspection & Maintenance</p>
                    </div>
                    <br />
                    <div className='text-center'>
                      <button type="button" className="btn btn-warning btn-sm ">BUY NOW</button>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}




  </>
}

export default App