import React from 'react'

const MiddleBar = () => {
    return <>
        <br />
        <div className="container ">
            <div className="row justify-content-between">
                <div className="col-sm-6 ">
                    <img width={"250px"} src="https://velikorodnov.com/wordpress/termosolar/wp-content/themes/termosolar/images/logo@2x.png" alt="" srcSet="" />
                </div>
                <div className="col-sm-6 text-end d-md-block d-none">
                    {/* <h4 className='mt-3'> 24/7 EMERGENCY SERVICE | 90909090</h4> */}
                    <div className='d-flex align-items-center justify-content-end'>
                        <i className="bi bi-telephone-plus mx-2 fs-3"></i>
                        <div>
                            <span className='fw-light'>24/7 EMERGENCY SERVICE</span>
                            <h2 className='text-danger'>909-09-090</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </>
}

export default MiddleBar