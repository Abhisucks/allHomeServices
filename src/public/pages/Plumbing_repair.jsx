import React, { useEffect, useState } from 'react'
import styles from "./Heating_service.module.css"

const Plumbing_repair = () => {

    const [activeButton, setActiveButton] = useState(1);
    const [content, setContent] = useState(null);

    useEffect(() => {
        // Set the default content when the component mounts
        const selectedContent = getContentForButton(activeButton);
        setContent(selectedContent);
    }, []);

    const buttonData = [
        { id: 1, label: 'HEATER INSTALLATION/REPLACEMENT' },
        { id: 2, label: 'HEATER REPAIR/MAINTENANCE' },
        { id: 3, label: 'FURNACE INSTALLATION/REPLACEMENT' },
        { id: 4, label: 'FURNACE REPAIR/MAINTENANCE' },
        { id: 5, label: 'HEAT PUMP SERVICES' },
        { id: 6, label: 'BOILER REPAIR' },
        { id: 7, label: 'GEOTHERMAL HEATING' },
    ];

    const handleButtonClick = (button) => {
        setActiveButton(button.id);
        const selectedContent = getContentForButton(button.id);
        setContent(selectedContent);

    };

    const getContentForButton = (buttonId) => {
        // You can implement a switch statement or an object to map button IDs to content
        // For this example, I'll directly return the content based on the button ID
        switch (buttonId) {
            case 1:
                return (
                    <>
                        <HeaterInstallation />
                    </>
                );
            case 2:
                return (
                    <>
                        <HeaterRepair />
                    </>
                );
            case 3:
                return (
                    <>
                        <FurnaceInstallation />
                    </>
                );
            case 4:
                return (
                    <>
                        <FurnaceRepair />
                    </>
                );
            case 5:
                return (
                    <>
                        <HeatPumpServices />
                    </>
                );
            case 6:
                return (
                    <>
                        <BoilerRepair />
                    </>
                );
            case 7:
                return (
                    <>
                        <GeothermalHeating />
                    </>
                );
            // ... Implement cases for other buttons
            default:
                return null;
        }
    };
    return <>

        <div className="carousel-container  bg-info">
            <div className="p-5 bg-info text-center">
                <h1 className='text-light fs-1 fw-bold mt-4'>Plumbing Repair</h1>
            </div>
        </div>
        <br />
        <br />

        <div className="container">
            <div className="row">
                <div className="col-sm-4 mt-2  ">
                    {buttonData.map((button) => (
                        <div
                            key={button.id}
                            onClick={() => handleButtonClick(button)}
                            className={` text-light text-center  rounded-1 p-1 mb-1 ${activeButton === button.id ? `${styles.active}` : `bg-dark`} `}
                        >
                            <p className={`fw-semibold mt-2  ${styles.cursurs}`}>{button.label}</p>
                        </div>
                    ))}
                </div>
                <div className={`col-sm-8 mt-2 ps-5`}>
                    {content}
                </div>
            </div>
        </div>
    </>
}

export default Plumbing_repair


const HeaterInstallation = () => {
    return <>

        <div className={`${styles.contentContainer}`}>
            <h2 className='fs-3'>Heater Installation/Replacement</h2>
            <p>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat.</p>
            <img className='img-fluid' src="https://velikorodnov.com/wordpress/termosolar/wp-content/uploads/2017/12/750x350_img1.jpg" alt="" />


            <br /> <br />

            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Donec porta diam eu massa.</span></p>
            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Quisque diam lorem, interdum vitae, dapibus ac.</span></p>
            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Donec eget tellus non erat lacinia fermentum.</span></p>
            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Donec in velit vel ipsum auctor pulvinar..</span></p>

            <p className='mt-2'>Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipis. Mauris accumsan nulla vel diam.</p>

            <button type="button" className="btn btn-warning btn-lg fw-semibold fs-6 mb-5">GET SERVICE NOW</button>
        </div>

    </>
}
const HeaterRepair = () => {
    return <>
        <div className={`${styles.contentContainer}`}>
            <h2 className='fs-3'>Heater Repair/Maintenance</h2>
            <p>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat.</p>
            <img className='img-fluid' src="https://velikorodnov.com/wordpress/termosolar/wp-content/uploads/2017/12/750x350_img1.jpg" alt="" />


            <br /> <br />

            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Donec porta diam eu massa.</span></p>
            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Quisque diam lorem, interdum vitae, dapibus ac.</span></p>
            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Donec eget tellus non erat lacinia fermentum.</span></p>
            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Donec in velit vel ipsum auctor pulvinar..</span></p>

            <p className='mt-2'>Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipis. Mauris accumsan nulla vel diam.</p>

            <button type="button" className="btn btn-warning btn-lg fw-semibold fs-6 mb-5">GET SERVICE NOW</button>
        </div>

    </>
}
const FurnaceInstallation = () => {
    return <>
        <div className={`${styles.contentContainer}`}>
            <h2 className='fs-3'>Furnace Installation/Replacement</h2>
            <p>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat.</p>
            <img className='img-fluid' src="https://velikorodnov.com/wordpress/termosolar/wp-content/uploads/2017/12/750x350_img1.jpg" alt="" />


            <br /> <br />

            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Donec porta diam eu massa.</span></p>
            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Quisque diam lorem, interdum vitae, dapibus ac.</span></p>
            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Donec eget tellus non erat lacinia fermentum.</span></p>
            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Donec in velit vel ipsum auctor pulvinar..</span></p>

            <p className='mt-2'>Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipis. Mauris accumsan nulla vel diam.</p>

            <button type="button" className="btn btn-warning btn-lg fw-semibold fs-6 mb-5">GET SERVICE NOW</button>
        </div>

    </>
}
const FurnaceRepair = () => {
    return <>
        <div className={`${styles.contentContainer}`}>
            <h2 className='fs-3'>Furnace Repair/Maintenance</h2>
            <p>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat.</p>
            <img className='img-fluid' src="https://velikorodnov.com/wordpress/termosolar/wp-content/uploads/2017/12/750x350_img1.jpg" alt="" />


            <br /> <br />

            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Donec porta diam eu massa.</span></p>
            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Quisque diam lorem, interdum vitae, dapibus ac.</span></p>
            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Donec eget tellus non erat lacinia fermentum.</span></p>
            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Donec in velit vel ipsum auctor pulvinar..</span></p>

            <p className='mt-2'>Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipis. Mauris accumsan nulla vel diam.</p>

            <button type="button" className="btn btn-warning btn-lg fw-semibold fs-6 mb-5">GET SERVICE NOW</button>
        </div>

    </>
}
const HeatPumpServices = () => {
    return <>
        <div className={`${styles.contentContainer}`}>
            <h2 className='fs-3'>Heat Pump Services</h2>
            <p>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat.</p>
            <img className='img-fluid' src="https://velikorodnov.com/wordpress/termosolar/wp-content/uploads/2017/12/750x350_img1.jpg" alt="" />


            <br /> <br />

            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Donec porta diam eu massa.</span></p>
            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Quisque diam lorem, interdum vitae, dapibus ac.</span></p>
            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Donec eget tellus non erat lacinia fermentum.</span></p>
            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Donec in velit vel ipsum auctor pulvinar..</span></p>

            <p className='mt-2'>Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipis. Mauris accumsan nulla vel diam.</p>

            <button type="button" className="btn btn-warning btn-lg fw-semibold fs-6 mb-5">GET SERVICE NOW</button>
        </div>

    </>
}
const BoilerRepair = () => {
    return <>
        <div className={`${styles.contentContainer}`}>
            <h2 className='fs-3'>Boiler Repair</h2>
            <p>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat.</p>
            <img className='img-fluid' src="https://velikorodnov.com/wordpress/termosolar/wp-content/uploads/2017/12/750x350_img1.jpg" alt="" />


            <br /> <br />

            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Donec porta diam eu massa.</span></p>
            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Quisque diam lorem, interdum vitae, dapibus ac.</span></p>
            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Donec eget tellus non erat lacinia fermentum.</span></p>
            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Donec in velit vel ipsum auctor pulvinar..</span></p>

            <p className='mt-2'>Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipis. Mauris accumsan nulla vel diam.</p>

            <button type="button" className="btn btn-warning btn-lg fw-semibold fs-6 mb-5">GET SERVICE NOW</button>
        </div>

    </>
}
const GeothermalHeating = () => {
    return <>
        <div className={`${styles.contentContainer}`}>
            <h2 className='fs-3'>Geothermal Heating</h2>
            <p>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat.</p>
            <img className='img-fluid' src="https://velikorodnov.com/wordpress/termosolar/wp-content/uploads/2017/12/750x350_img1.jpg" alt="" />


            <br /> <br />

            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Donec porta diam eu massa.</span></p>
            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Quisque diam lorem, interdum vitae, dapibus ac.</span></p>
            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Donec eget tellus non erat lacinia fermentum.</span></p>
            <p><i className="bi bi-check2-circle text-primary fs-5"></i> <span className='ms-3'>Donec in velit vel ipsum auctor pulvinar..</span></p>

            <p className='mt-2'>Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipis. Mauris accumsan nulla vel diam.</p>

            <button type="button" className="btn btn-warning btn-lg fw-semibold fs-6 mb-5">GET SERVICE NOW</button>
        </div>

    </>
}