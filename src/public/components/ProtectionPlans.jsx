import React from 'react'

const ProtectionPlans = () => {
    return <>
        <div style={{ backgroundColor: "rgb(0,39,70)" }}>
            <div className="container">
                <br />
                <br />
                <h1 className='text-center text-white'>Our Protection Plans</h1>
                <p className='text-center text-white'>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna.
                    <br />  Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros.</p>
                <br />
                <br />
                <div className="row ">
                    {/* <div className="col-sm-4 col-lg-3  offset-lg-1   ">
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
                    </div> */}

                    <div className="col-sm-10 mx-auto ">
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
                                <div className="card mt-3 mt-sm-1">
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
            <br />
            <br />
        </div>

    </>
}

export default ProtectionPlans