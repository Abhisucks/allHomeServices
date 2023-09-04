import React from 'react'
import styles from "./CardAllService.module.css"
import { Link } from 'react-router-dom'

const Sale = () => {
    return <>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
            </div>
            <div className="carousel-inner bg-body-secondary p-5 ">

                <h3 className='text-center p-2 fw-bold '>Our Products</h3>
                <br />
                <div className="carousel-item active">
                    <div className="row d-flex justify-content-center gap-sm-0 gap-3">
                        <div className="col-sm-2 text-center">
                            <Link to={"/shop"} className={`card ${styles.card}`} >
                                <div className={`card-body p-0 ${styles.cardbody}`}>
                                    <h6 className='my-3  '>AC Spare Parts</h6>
                                    <hr />
                                    <img className='img-fluid p-2 ' src="
                           https://4.imimg.com/data4/JC/XF/MY-14934993/cooler-spare-parts-250x250.jpg
                            " alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-2 text-center">
                            <div className={`card ${styles.card}`}>
                                <div className={`card-body p-0 ${styles.cardbody}`}>
                                    <h6 className='my-3 '>Plumbing Spare Parts</h6>
                                    <hr />
                                    <img className='img-fluid ' src="
                            https://4.imimg.com/data4/SH/QU/MY-14934993/gas-geyser-spare-parts-250x250.jpg
                            " alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2 text-center">
                            <div className={`card ${styles.card}`}>
                                <div className={`card-body p-0 ${styles.cardbody}`}>
                                    <h6 className='my-3'>RO Spare Parts</h6>
                                    <hr />
                                    <img className='img-fluid  ' src="
                                    https://4.imimg.com/data4/HO/EC/MY-14934993/ro-spare-parts-250x250.jpg
                            " alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2 text-center">
                            <div className={`card ${styles.card}`}>
                                <div className={`card-body p-0 ${styles.cardbody}`}>
                                    <h6 className='my-3  '>AC Spare Parts</h6>
                                    <hr />
                                    <img className='img-fluid p-2 ' src="
                           https://4.imimg.com/data4/JC/XF/MY-14934993/cooler-spare-parts-250x250.jpg
                            " alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2 text-center">
                            <div className={`card ${styles.card}`}>
                                <div className={`card-body p-0 ${styles.cardbody}`}>
                                    <h6 className='my-3 '>Plumbing Spare Parts</h6>
                                    <hr />
                                    <img className='img-fluid ' src="
                            https://4.imimg.com/data4/SH/QU/MY-14934993/gas-geyser-spare-parts-250x250.jpg
                            " alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2 text-center">
                            <div className={`card ${styles.card}`}>
                                <div className={`card-body p-0 ${styles.cardbody}`}>
                                    <h6 className='my-3'>RO Spare Parts</h6>
                                    <hr />
                                    <img className='img-fluid  ' src="
                                    https://4.imimg.com/data4/HO/EC/MY-14934993/ro-spare-parts-250x250.jpg
                            " alt="" />
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row d-flex justify-content-center gap-sm-0 gap-3">
                        <div className="col-sm-2 text-center">
                            <div className={`card ${styles.card}`}>
                                <div className={`card-body p-0 ${styles.cardbody}`}>
                                    <h6 className='my-3  '>AC Spare Parts</h6>
                                    <hr />
                                    <img className='img-fluid p-2 ' src="
                           https://4.imimg.com/data4/JC/XF/MY-14934993/cooler-spare-parts-250x250.jpg
                            " alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2 text-center">
                            <div className={`card ${styles.card}`}>
                                <div className={`card-body p-0 ${styles.cardbody}`}>
                                    <h6 className='my-3 '>Plumbing Spare Parts</h6>
                                    <hr />
                                    <img className='img-fluid ' src="
                            https://4.imimg.com/data4/SH/QU/MY-14934993/gas-geyser-spare-parts-250x250.jpg
                            " alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2 text-center">
                            <div className={`card ${styles.card}`}>
                                <div className={`card-body p-0 ${styles.cardbody}`}>
                                    <h6 className='my-3'>RO Spare Parts</h6>
                                    <hr />
                                    <img className='img-fluid  ' src="
                                    https://4.imimg.com/data4/HO/EC/MY-14934993/ro-spare-parts-250x250.jpg
                            " alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2 text-center">
                            <div className={`card ${styles.card}`}>
                                <div className={`card-body p-0 ${styles.cardbody}`}>
                                    <h6 className='my-3  '>AC Spare Parts</h6>
                                    <hr />
                                    <img className='img-fluid p-2 ' src="
                           https://4.imimg.com/data4/JC/XF/MY-14934993/cooler-spare-parts-250x250.jpg
                            " alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2 text-center">
                            <div className={`card ${styles.card}`}>
                                <div className={`card-body p-0 ${styles.cardbody}`}>
                                    <h6 className='my-3 '>Plumbing Spare Parts</h6>
                                    <hr />
                                    <img className='img-fluid ' src="
                            https://4.imimg.com/data4/SH/QU/MY-14934993/gas-geyser-spare-parts-250x250.jpg
                            " alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2 text-center">
                            <div className={`card ${styles.card}`}>
                                <div className={`card-body p-0 ${styles.cardbody}`}>
                                    <h6 className='my-3'>RO Spare Parts</h6>
                                    <hr />
                                    <img className='img-fluid  ' src="
                                    https://4.imimg.com/data4/HO/EC/MY-14934993/ro-spare-parts-250x250.jpg
                            " alt="" />
                                </div>
                            </div>
                        </div>



                    </div>
                </div>


            </div>

            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" ></span>
                <span className="visually-hidden text-dark bg-danger">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon text-dark" ></span>
                <span className="visually-hidden text-dark bg-danger">Next</span>
            </button> */}
        </div>

    </>
}

export default Sale