import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Test from './Test';

const MainNavbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return <>

        <br />
        <div className="navbar navbar-expand-lg navbar-light bg-primary mx-5 rounded">
            <div className="container ">

                <Link to="/" className="navbar-brand text-white">Termosolor</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <a className="nav-link active dropdown-toggle   text-white" role='button' data-bs-toggle="dropdown" aria-expanded="false" aria-current="page" href="#">Services</a>
                        <ul className="dropdown-menu">
                            <Servies />
                            {/* <div className="container">
                                <div className="row justify-content-between">
                                    <div className="col-sm-2">
                                        <div className='d-flex gap-3 '>
                                            <div>
                                                <i className="bi bi-collection text-primary fs-3 "></i>
                                            </div>
                                            <div>
                                                <h2>Heating</h2>
                                            </div>
                                        </div>
                                        <h5>AC</h5>
                                        <h6>Repair/Maintance</h6>
                                        <hr />
                                        <h6 className='text-nowrap'>Plumbing Repair</h6>
                                        <hr />
                                        <h6>Heat Pump Installation</h6>
                                        <hr />
                                        <h6 className='text-nowrap'>Frunace Installation</h6>
                                    </div>

                                    <div className="col-sm-2">
                                        <div className='d-flex gap-3 '>
                                            <div>
                                                <i className="bi bi-hypnotize text-primary fs-3 "></i>
                                            </div>
                                            <div>
                                                <h2>Colling</h2>
                                            </div>
                                        </div>
                                        <h5>AC</h5>
                                        <h6>Filter Replacements</h6>
                                        <hr />
                                        <h6 className='text-wrap'>AC Repair/Maintenance</h6>
                                        <hr />
                                        <h6 className='text-wrap'>AC Installation/Replacement</h6>
                                        <hr />
                                        <h6 className='text-wrap'>Drain Clearing</h6>
                                    </div>

                                    <div className="col-sm-2">
                                        <div className='d-flex gap-3 '>
                                            <div>
                                                <i className="bi bi-magnet text-primary fs-3 "></i>
                                            </div>
                                            <div>
                                                <h2>Plumbing</h2>
                                            </div>
                                        </div>
                                        <h5>AC</h5>
                                        <h6>Filter Replacements</h6>
                                        <hr />
                                        <h6 className='text-nowrap'>Plumbing Repair</h6>
                                        <hr />
                                        <h6>Heat Pump Installation</h6>
                                        <hr />
                                        <h6 className='text-nowrap'>Frunace Installation</h6>
                                    </div>

                                    <div className="col-sm-2">
                                        <div className='d-flex gap-3 '>
                                            <div>
                                                <i className="bi bi-credit-card-2-back text-primary fs-3 "></i>
                                            </div>

                                            <div>
                                                <h2 className='text-nowrap'>Air Qality</h2>
                                            </div>
                                        </div>
                                        <h5>AC</h5>
                                        <h6>Installation/Replacement</h6>
                                        <hr />
                                        <h6 className='text-nowrap'>Drain Clearing</h6>
                                        <hr />
                                        <h6>Central Air Installation</h6>
                                        <hr />
                                        <h6 className='text-nowrap'>Frunace Installation</h6>
                                    </div>

                                    <div className="col-sm-2">
                                        <div className='d-flex gap-3 '>
                                            <div>
                                                <i className="bi bi-paperclip text-primary fs-3 "></i>
                                            </div>
                                            <div>
                                                <h2>Electical</h2>
                                            </div>
                                        </div>
                                        <br />
                                        <h6>Lighting</h6>
                                        <hr />
                                        <h6 className='text-nowrap'>Surge Protection</h6>
                                        <hr />
                                        <h6>Generators</h6>
                                        <hr />
                                        <h6 className='text-nowrap'>Heat Pump Installation</h6>
                                    </div>
                                    <br />

                                </div>
                            </div> */}
                        </ul>


                        <a className="nav-link active dropdown-toggle  text-white" role='button' data-bs-toggle="dropdown" aria-expanded="false" aria-current="page" href="#">Sale</a>
                        <ul className="dropdown-menu mx-5">
                            <Shop />
                            {/* <li><a className="dropdown-item" href="#">  Shop with Sidebar</a></li>
                            <li><a className="dropdown-item" href="#">My account</a></li>
                            <li><a className="dropdown-item" href="#">Cart</a></li>
                            <li><a className="dropdown-item" href="#">Single Product Page</a></li> */}
                        </ul>

                        <a className="nav-link active dropdown-toggle  text-white" role='button' data-bs-toggle="dropdown" aria-expanded="false" aria-current="page" href="#">About</a>
                        <ul className="dropdown-menu mx-5">
                            <AboutUs />
                            {/* <li><a className="dropdown-item" href="#"> Schedule an Appointment</a></li>
                            <li><a className="dropdown-item" href="#">Get an Estimate</a></li>
                            <li><a className="dropdown-item" href="#">Contact Us</a></li> */}
                        </ul>

                        <a className="nav-link active dropdown-toggle  text-white" role='button' data-bs-toggle="dropdown" aria-expanded="false" aria-current="page" href="#">Contact</a>
                        <ul className="dropdown-menu mx-5">
                            <ContactUs />
                            {/* <li><a className="dropdown-item" href="#">Shop with Sidebar</a></li>
                            <li><a className="dropdown-item" href="#">My account</a></li>
                            <li><a className="dropdown-item" href="#">Checkout</a></li>
                            <li><a className="dropdown-item" href="#">Single Product Page</a></li> */}
                        </ul>
                    </ul>



                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-warning" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>


    </>
}

export default MainNavbar




// const Servies = () => {
//     return <>
//         <div className="container">
//             <div className="row justify-content-between">
//                 <div className="col-sm-2">
//                     <div className='d-flex gap-3 '>
//                         <div>
//                             <i className="bi bi-collection text-primary fs-3 "></i>
//                         </div>
//                         <div>
//                             <h2>Heating</h2>
//                         </div>
//                     </div>
//                     <h5>AC</h5>
//                     <h6>Repair/Maintance</h6>
//                     <hr />
//                     <h6 className='text-nowrap'>Plumbing Repair</h6>
//                     <hr />
//                     <h6>Heat Pump Installation</h6>
//                     <hr />
//                     <h6 className='text-nowrap'>Frunace Installation</h6>
//                 </div>

//                 <div className="col-sm-2">
//                     <div className='d-flex gap-3 '>
//                         <div>
//                             <i className="bi bi-hypnotize text-primary fs-3 "></i>
//                         </div>
//                         <div>
//                             <h2>Colling</h2>
//                         </div>
//                     </div>
//                     <h5>AC</h5>
//                     <h6>Filter Replacements</h6>
//                     <hr />
//                     <h6 className='text-wrap'>AC Repair/Maintenance</h6>
//                     <hr />
//                     <h6 className='text-wrap'>AC Installation/Replacement</h6>
//                     <hr />
//                     <h6 className='text-wrap'>Drain Clearing</h6>
//                 </div>

//                 <div className="col-sm-2">
//                     <div className='d-flex gap-3 '>
//                         <div>
//                             <i className="bi bi-magnet text-primary fs-3 "></i>
//                         </div>
//                         <div>
//                             <h2>Plumbing</h2>
//                         </div>
//                     </div>
//                     <h5>AC</h5>
//                     <h6>Filter Replacements</h6>
//                     <hr />
//                     <h6 className='text-nowrap'>Plumbing Repair</h6>
//                     <hr />
//                     <h6>Heat Pump Installation</h6>
//                     <hr />
//                     <h6 className='text-nowrap'>Frunace Installation</h6>
//                 </div>

//                 <div className="col-sm-2">
//                     <div className='d-flex gap-3 '>
//                         <div>
//                             <i className="bi bi-credit-card-2-back text-primary fs-3 "></i>
//                         </div>

//                         <div>
//                             <h2 className='text-nowrap'>Air Qality</h2>
//                         </div>
//                     </div>
//                     <h5>AC</h5>
//                     <h6>Installation/Replacement</h6>
//                     <hr />
//                     <h6 className='text-nowrap'>Drain Clearing</h6>
//                     <hr />
//                     <h6>Central Air Installation</h6>
//                     <hr />
//                     <h6 className='text-nowrap'>Frunace Installation</h6>
//                 </div>

//                 <div className="col-sm-2">
//                     <div className='d-flex gap-3 '>
//                         <div>
//                             <i className="bi bi-paperclip text-primary fs-3 "></i>
//                         </div>
//                         <div>
//                             <h2>Electical</h2>
//                         </div>
//                     </div>
//                     <br />
//                     <h6>Lighting</h6>
//                     <hr />
//                     <h6 className='text-nowrap'>Surge Protection</h6>
//                     <hr />
//                     <h6>Generators</h6>
//                     <hr />
//                     <h6 className='text-nowrap'>Heat Pump Installation</h6>
//                 </div>
//                 <br />

//             </div>
//         </div>
//     </>
// }

const Servies = () => {
    return <>
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-sm-6 col-md-6 col-lg-1 ">
                    <div className='d-flex gap-3 align-items-center '>
                        <div>
                            <i className="bi bi-collection text-primary fs-3 "></i>
                        </div>
                        <div>
                            <h4>Heating</h4>
                        </div>
                    </div>

                    <p className=' dropdown-item fw-medium'>AC</p>
                    <Link to="/heating">
                        <h6 className='text-decoration-none dropdown-item fw-medium'>Repair/Maintance</h6>
                    </Link>

                    <br />
                    {/* <hr /> */}
                    <Link to="/plumbing">

                        <h6 className='text-nowrap dropdown-item fw-medium'>Plumbing Repair</h6>
                    </Link>
                    {/* <hr /> */}
                    <br />
                    <h6 className='text-nowrap dropdown-item fw-medium' >Heat Pump Installation</h6>
                    {/* <hr /> */}
                    <br />
                    <h6 className='text-nowrap dropdown-item fw-medium'>Frunace Installation</h6>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-1">
                    <div className='d-flex gap-3 align-items-center '>
                        <div>
                            <i className="bi bi-hypnotize text-primary fs-4 "></i>
                        </div>
                        <div>
                            <h4>Colling</h4>
                        </div>
                    </div>


                    <h6 className='dropdown-item fw-medium'>AC</h6>
                    <h6 className='dropdown-item fw-medium mt-3'>Filter Replaceme    nts</h6>
                    {/* <hr /> */}
                    <h6 className='text-wrap dropdown-item mt-3 fw-medium '>AC Repair/Maintenance</h6>
                    {/* <hr /> */}
                    <h6 className='text-wrap dropdown-item mt-3 fw-medium '>AC Installation/Replacement</h6>
                    {/* <hr /> */}
                    <h6 className='dropdown-item mt-3 fw-medium '>Drain Clearing</h6>


                </div>

                <div className="col-sm-6 col-md-6 col-lg-1">
                    <div className='d-flex gap-3 align-content-center '>
                        <div>
                            <i className="bi bi-magnet text-primary fs-4 "></i>
                        </div>
                        <div>
                            <h4>Plumbing</h4>
                        </div>
                    </div>
                    <h6 className='dropdown-item fw-medium'>AC</h6>
                    <h6 className='dropdown-item mt-3 fw-medium' >Filter Replacements</h6>
                    {/* <hr /> */}
                    <h6 className='dropdown-item mt-3 fw-medium text-nowrap'>Plumbing Repair</h6>
                    {/* <hr /> */}
                    <h6 className='dropdown-item mt-3 fw-medium text-nowrap '>Heat Pump Installation</h6>
                    {/* <hr /> */}
                    <h6 className='dropdown-item mt-3 fw-medium text-nowrap'>Frunace Installation</h6>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-1">
                    <div className='d-flex gap-3 align-content-center '>
                        <div>
                            <i className="bi bi-credit-card-2-back text-primary fs-4 "></i>
                        </div>

                        <div>
                            <h4 className='text-nowrap'>Air Qality</h4>
                        </div>
                    </div>
                    <h6 className='dropdown-item fw-medium'>AC</h6>
                    <h6 className='dropdown-item mt-3 fw-medium' >Installation/Replacement</h6>
                    {/* <hr /> */}
                    <h6 className=' dropdown-item mt-3 fw-medium text-nowrap'>Drain Clearing</h6>
                    {/* <hr /> */}
                    <h6 className='dropdown-item mt-3 fw-medium'>Central Air Installation</h6>
                    {/* <hr /> */}
                    <h6 className='dropdown-item mt-3 fw-medium text-nowrap'>Frunace Installation</h6>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-1">
                    <div className='d-flex gap-3 align-items-center'>
                        <div>
                            <i className="bi bi-paperclip text-primary fs-3 "></i>
                        </div>
                        <div>
                            <h4>Electical</h4>
                        </div>
                    </div>
                    <br />
                    <h6 className='dropdown-item mt-3 fw-medium'>Lighting</h6>
                    {/* <hr /> */}
                    <h6 className=' dropdown-item mt-3 fw-medium text-nowrap'>Surge Protection</h6>
                    {/* <hr /> */}
                    <h6 className='dropdown-item mt-3 fw-medium'>Generators</h6>
                    {/* <hr /> */}
                    <h6 className=' dropdown-item mt-3 fw-medium text-nowrap'>Heat Pump Installation</h6>
                </div>
                <br />

            </div>
        </div>
    </>
}


const Shop = () => {
    return <>
        <li><a className="dropdown-item" href="#">  Shop with Sidebar</a></li>
        <li><a className="dropdown-item" href="#">My account</a></li>
        <li><a className="dropdown-item" href="#">Cart</a></li>
        <li><a className="dropdown-item" href="#">Single Product Page</a></li>
    </>
}


const AboutUs = () => {
    return <>
        <li><a className="dropdown-item" href="#"> About Us</a></li>
        <li><a className="dropdown-item" href="#">Our Team</a></li>
        <li><a className="dropdown-item" href="#">Servies Overview</a></li>
        <li><a className='dropdown-item'>Testimonials</a></li>
        <li><a className='dropdown-item' href="#">Careers</a></li>
        <li><a className='dropdown-item' href="#">Maintenance Program</a></li>
        <li><a className='dropdown-item' href="#">Special and Coupons</a></li>
    </>
}

const ContactUs = () => {
    return <>
        <li><a className="dropdown-item" href="#">Schedule an Appointment</a></li>
        <li><a className="dropdown-item" href="#">Get an Estimate</a></li>
        <li><a className='dropdown-item' href="#"></a></li>
    </>
}

const Sidebar = () => {
    return <>

    </>
}

