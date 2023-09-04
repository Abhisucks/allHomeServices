import React from 'react'

const Navbar = () => {
  return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-0 ">
      <div className="container-fluid ">
        <div className="navbar-collapse" id="navbarTogglerDemo03">
          <div className="nav mt-2 gap-1  mx-auto  ms-4">
            <p> Resources<span> |</span></p>
            <p> Schedule Service<span> |</span></p>
            <p>Schedule an Appointment <span> |</span>  </p>
            <p> Coupons</p>
          </div>
          {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Resources </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link active" href="#">Schedule Service <span> |</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Schedule an Appointment  <span> |</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Service </a>
            </li>

          </ul> */}
          <form className="d-flex gap-3 fs-5 me-4" role="search">
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}

            <i className="bi bi-google text-danger"></i>
            <i className="bi bi-linkedin text-primary"></i>
            <i className="bi bi-youtube text-danger"></i>
            <i className="bi bi-facebook  text-primary"></i>
            <i className="bi bi-twitter  text-primary"></i>
            <i className="bi bi-instagram  text-danger"></i>
            <i className="bi bi-whatsapp text-success"></i>
          </form>
        </div>
      </div>
    </nav>


  </>
}

export default Navbar