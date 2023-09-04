import React from 'react'
import styles from "./ServicesCard.module.css"
const ServicesCard = () => {
    return <>

        <div className=" ">
            <div className=" d-block d-sm-flex d-md-flex flex-wrap">

                <div className=" col-sm-6 col-md-3  mx-sm-auto  text-center"><div className={`div ${styles.frist}`}>
                    <div className="card-body p-4" >
                        <h4 className='text-white'>Schedule Service</h4>
                        <button type="button" className="btn btn-warning mt-2 btn-sm">GET SERVICE NOW</button>
                    </div>
                </div></div>
                <div className="col-sm-6  col-md-3  mx-sm-auto text-center"><div className={`div ${styles.second}`}>
                    <div className="card-body p-4">
                        <h4 className='text-md-center text-white'>Request Estimate</h4>
                        <button type="button" className="btn btn-warning mt-2 btn-sm">GET AN ESTIMATE</button>
                    </div>
                </div></div>
                <div className=" col-sm-6  col-md-3  mx-sm-auto text-center"><div className={`div ${styles.third}`}>
                    <div className="card-body p-4">
                        <h4 className='text-white'>Financing Options</h4>
                        <button type="button" className="btn btn-warning mt-2 btn-sm">APPLY NOW</button>
                    </div>
                </div></div>
                <div className="col-sm-6  col-md-3  mx-sm-auto text-center"><div className={`div ${styles.four}`}>
                    <div className="card-body p-4">
                        <h4 className=' text-white'>Saving Coupons</h4>
                        <button type="button" className="btn btn-warning mt-2 btn-sm">GET THEM NOW</button>
                    </div>
                </div></div>
            </div>


        </div>


    </>
}

export default ServicesCard