import React from 'react'
import styles from "./WelcomeComfy.module.css"
// import "./WelcomeComfy.css"

const WelcomeComfy = () => {

    const service_Cards = [
        {
            logo: "bi bi-tools", heading: "24x7 SERVICE", desc: ""
        },
        {
            logo: "bi bi-award", heading: "50 YEARS EXPERIENCE", desc: ""
        },
        {
            logo: "bi bi-person-fill", heading: "DEDICATED STAFF", desc: ""
        }
    ]

    const service_cards = service_Cards.map((item, i) => <div className={`col-sm-4 text-center ${styles.roundedcard}`} key={i}>
        <div>
            <p className='text-warning text-center fw-bold fs-1 my-1 '> <i className={`${item.logo} `}></i></p>
            <p className={`my-1 fw-medium ${styles.background_We}`}>{item.heading} </p>
        </div>
        {/* <p className=''>{item.desc} </p> */}
    </div >
    )

    return <>

        <div className="container" >
            <div className="row  p-3" >
                <div className="col-sm-8 offset-sm-2 text-center " >
                    <br />
                    <p className={` ${styles.background_We}`}>WELCOME!</p>
                    <p className={`fs-2 fw-bold ${styles.background_We}`} >We're Here To Keep You Comfy!</p>
                    <p className='text-secondary ' >Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna.
                        Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros.

                    </p>
                </div>
            </div>
            <div className="row text-center text-md-start">
                {service_cards}
                <div className='text-center mt-5'>

                    <button type="button" className={`btn btn-warning  btn-md btn-hover fw-bold mt-5  `}>OUR SERVICES</button>
                </div>
            </div>
        </div>
        <br />

    </>
}

export default WelcomeComfy