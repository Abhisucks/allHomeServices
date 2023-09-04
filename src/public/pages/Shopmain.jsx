import React from 'react'

const Shopmain = () => {
    const btnColor = "#FB641B"
    const cartbtnColor = "#FF9F00"
    return <>
        <div className='container py-5'>
            <div className="row">
                <div className="col-md-4">
                    <div className="card rounded-0">
                        <div className="card-body d-flex justify-content-center align-items-center m-3">
                            <img alt="" className="img-fluid text-center"
                                src="https://4.imimg.com/data4/HO/EC/MY-14934993/ro-spare-parts-250x250.jpg" />
                        </div>
                    </div>
                </div>
                <div className="col-md-8 px-2">
                    <div className="card rounded-0">
                        <div className="card-body">
                            <h5>Krisell Pre housing filter complete set for RO Water Purifiers Solid Filter</h5>
                            <p className='text-success fw-medium'>Special price</p>
                            <h3 className='mx-2'>₹2000</h3>
                            <p>Brand : Lorem</p>
                            <p className='fw-medium'>Description:</p>
                            <p className='mx-3'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, saepe aliquid odio doloremque, perspiciatis illum, voluptatibus iure expedita omnis temporibus et minus similique id beatae odit? Quo doloribus vero unde!
                            </p>
                            <p className='fw-medium'>Specification:</p>
                            <div className='mx-3'>
                                <ul>
                                    <li>Lorem ipsum</li>
                                    <li>Sit amet </li>
                                </ul>
                            </div>
                            <div className='d-flex'>
                                <button type="button" className="btn text-light fw-bold me-2 w-50" style={{ background: cartbtnColor }}><i className="bi bi-cart-plus mx-1"></i> Add To Cart</button>
                                <button type="button" className="btn text-light fw-bold w-50" style={{ background: btnColor }}><i className="bi bi-bag-heart-fill mx-2"></i>Buy  Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Shopmain