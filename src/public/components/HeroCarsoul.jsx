import React from 'react'

const HeroCarsoul = () => {
    return <>
        <div className="carousel-container">
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img className='img-fluid d-block w-100' src="https://img.freepik.com/free-vector/air-conditioner-with-cold-wind-remote-control_107791-2881.jpg?w=1060&t=st=1693550649~exp=1693551249~hmac=c27e41f80f20b77094f386b4970be2a7217d7879e227693522c435710cb22f70" alt="Image 1" width="800" height="400" />
                    </div>
                    <div className="carousel-item " data-bs-interval="2000">
                        <img className='img-fluid d-block w-100' src="https://img.freepik.com/free-vector/air-conditioner-with-cold-wind-remote-control_107791-2881.jpg?w=1060&t=st=1693550649~exp=1693551249~hmac=c27e41f80f20b77094f386b4970be2a7217d7879e227693522c435710cb22f70" alt="Image 1" width="800" height="400" />
                    </div>
                    <div className="carousel-item " data-bs-interval="2000">
                        <img className='img-fluid d-block w-100' src="https://img.freepik.com/free-vector/air-conditioner-with-cold-wind-remote-control_107791-2881.jpg?w=1060&t=st=1693550649~exp=1693551249~hmac=c27e41f80f20b77094f386b4970be2a7217d7879e227693522c435710cb22f70" alt="Image 1" width="800" height="400" />
                    </div>

                </div>
                <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
        </div>

    </>
}

export default HeroCarsoul