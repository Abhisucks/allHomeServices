import React from 'react'
import styles from "./Contact.module.css"

const Contact = () => {

    const contact_content = [
        { logo: "bi  bi-geo-alt", desc: "9870 ST VINCENT PLACE, GLASGOW, DC 45 FR 45." },
        {
            logo: "bi  bi-envelope", desc: "MAIL@COMPANYNAME.COM"
        },
        { logo: "bi bi-telephone", desc: "987-654-3210" },
        {
            logo: "bi bi-stopwatch", desc: "OPEN 8AM-5PM: MONDAY-SATURDAY"
        }
    ]
    const contact_Content = contact_content.map((item, i) => <div key={i} className='d-flex  align-items-center gap-4'>
        <span className='fs-2 '><i className={`${item.logo}`}></i></span>
        <p className={`my-3 `}>{item.desc}</p>
    </div>
    )

    return <>
        <div className="container">

            <div className="row my-3">
                <div className='col-sm-6'>
                    <p className='text-primary fw-bold fs-5'>CONTACT</p>
                    {contact_Content}
                    <div className='d-flex gap-2 gap-md-3 my-3   my-md-2'>
                        <i className={`bi bi-linkedin alert alert-info p-3 ${styles.social_icons}`}></i>
                        <i className={`bi bi-facebook alert alert-info p-3 ${styles.social_icons}`}></i>
                        <i className={`bi bi-twitter alert alert-info p-3 ${styles.social_icons}`}></i>
                        <i className={`bi bi-google alert alert-info p-3 ${styles.social_icons}`}></i>
                        <i className={`bi bi-instagram alert alert-info p-3 ${styles.social_icons}`}></i>
                    </div>
                    <div className='row'>
                    </div>
                </div>
                <div className='col-sm-6  '>
                    <br />
                    <br />
                    <div className='my-2'>
                        <input
                            type="text"
                            className="form-control w-50 p-2"
                            id="name"
                            placeholder="Name * "
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please choose a username.</div>
                    </div>
                    <div className='my-2'>
                        <input
                            type="text"
                            className="form-control w-50 p-2"
                            id="email"
                            placeholder="Email * "
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please choose a username.</div>
                    </div>
                    <div className='my-2'>
                        <input
                            type="text"
                            className="form-control w-50 p-2"
                            id="phone"
                            placeholder="Phone * "
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please choose a username.</div>
                    </div>
                    <div className="my-2">
                        <select className="form-select w-50 p-2">
                            <option value="Type of Service">Type of Service</option>
                            <option value="Air Cleaners">Air Cleaners</option>
                            <option value="Duct Cleaning">Duct Cleaning</option>
                            <option value="Duct Sealing">Duct Sealing</option>
                        </select>
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please choose a username.</div>
                    </div>
                    <div className="my-2">
                        <input
                            type="text"
                            className="form-control p-2"
                            placeholder="How Can We Help You ?"
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please choose a username.</div>
                    </div>
                    <button type="button" className={`btn btn-warning btn-md  w-50  mt-3 ${styles.btn_hover}`}>
                        SUBMIT REQUEST
                    </button>
                </div>
                {/* <div className='d-flex gap-2 gap-md-3 my-3   my-md-2'>
                    <i className={`bi bi-linkedin alert alert-info p-3 ${styles.social_icons}`}></i>
                    <i className={`bi bi-facebook alert alert-info p-3 ${styles.social_icons}`}></i>
                    <i className={`bi bi-twitter alert alert-info p-3 ${styles.social_icons}`}></i>
                    <i className={`bi bi-google alert alert-info p-3 ${styles.social_icons}`}></i>
                    <i className={`bi bi-instagram alert alert-info p-3 ${styles.social_icons}`}></i>
                </div> */}
            </div>
        </div>



    </>
}

export default Contact