import React, { useEffect, useState } from 'react'

const RunningCounter = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(10);
    const [count4, setCount4] = useState(5);

    useEffect(() => {
        // Function to increment the count1 every second
        const interval = setInterval(() => {
            setCount1((prevCount) => {
                if (prevCount >= 24) {
                    clearInterval(interval); // Stop the interval when count1 reaches 99
                    return 24; // Limit the count1 to 99
                }
                return prevCount + 1;
            });
        }, 100);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        // Function to increment the count1 every second
        const interval = setInterval(() => {
            setCount2((prevCount) => {
                if (prevCount >= 100) {
                    clearInterval(interval); // Stop the interval when count1 reaches 99
                    return 100; // Limit the count1 to 99
                }
                return prevCount + 1;
            });
        }, 20);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        // Function to increment the count1 every second
        const interval = setInterval(() => {
            setCount3((prevCount) => {
                if (prevCount >= 100) {
                    clearInterval(interval); // Stop the interval when count1 reaches 99
                    return 100; // Limit the count1 to 99
                }
                return prevCount + 1;
            });
        }, 15);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        // Function to increment the count1 every second
        const interval = setInterval(() => {
            setCount4((prevCount) => {
                if (prevCount >= 30) {
                    clearInterval(interval); // Stop the interval when count1 reaches 99
                    return 30; // Limit the count1 to 99
                }
                return prevCount + 1;
            });
        }, 70);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);


    return <>
        <div className=''>
            <div className='container-fluid pt-3 text-light  d-flex justify-content-center  align-items-center   mx-auto' style={{ backgroundColor: "rgba(0,39,60,0.9" }}>
                <div className="row text-center offset-lg-1 gap-lg-3">
                    <div className="col-4 col-lg-2 col-md-4  text-center">
                        <p className='text-center'><i className="bi bi-telephone-plus-fill text-light fs-1"></i></p>
                        <p className='text-light'>One call/click service support</p>
                    </div>
                    <div className="col-4 col-lg-2 col-md-4 text-center">
                        <p className='text-center'><i className="bi bi-gear-wide text-light fs-1"></i></p>
                        <p className='text-light'>Genuine spare parts</p>
                    </div>
                    <div className="col-4 col-lg-2 col-md-4 text-center">
                        <p className='text-center'><i className="bi bi-person-workspace fs-1"></i></p>
                        <p className='text-light'>Expert Trained Technicians</p>
                    </div>
                    <div className="col-6 col-lg-2 col-md-6 text-center">
                        <p className='text-center'><i className="bi bi-house text-light fs-1"></i></p>
                        <p className='text-light'>Hassle-free At-Home services</p>
                    </div>
                    <div className="col-6 col-lg-2 col-md-6 text-center">
                        <p className='text-center'><i className="bi bi-tools text-light fs-1"></i></p>
                        <p className='text-light'>90 days service warranty</p>
                    </div>

                </div>
            </div>
        </div>

    </>
}

export default RunningCounter