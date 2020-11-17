import React from 'react'

import Fade from 'react-reveal'

import { AnimatedIcon, AnimateTimeline, AnimatedGrid } from '../Components/AnimatedResume.js';
import ResumeDetails from '../Components/ResumeDetails.js';
import { Modal, Backdrop} from '@material-ui/core'

const shadow = "0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.20)";

const Resume = (props) => {
    // 0-none, 1-education, 2-work, 3-extra
    const [activePage, setActivePage] = React.useState(0);
    const [activeCard, setActiveCard] = React.useState(null);
    const [height, setHeight] = React.useState(window.innerHeight * 3);
    const [showDetails, setShowDetails] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);

    const timelineRef = React.useRef(null);

    const handleActiveCard = (item) => {
        setActiveCard(item);
    }
    const handleCardClick = (index) => {
        if (index !== 0) {
            setShowDetails(true);
        }
        setActiveCard(index)
    }
    const handleHeight = (height) => {
        window.scrollTo(0, 0);
        if (height < window.innerHeight) {
            setHeight(window.innerHeight + 24)
        } else {
            setHeight(height + 96 + 24)
        }
    }
    const handleDetailsChange = () => {
        setShowDetails(!showDetails);
    }
    const handleTimeClick = (index) => {
        if (activePage === index) {
            setActivePage(0);
        } else {
            setActivePage(index);
        }
    }

    React.useEffect(() => {
        function handleClickOutside(event) {
            if (timelineRef.current && !timelineRef.current.contains(event.target)) {
                setActivePage(0);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [timelineRef]);

    React.useEffect(() => {
        if (showDetails) {
            setOpenModal(true);
        }
    }, [showDetails])

    return (
        <div style={{ background: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)" }}>
            <Fade up>
                <div style={{ height: height, background: "linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)", overflow: "auto" }}>
                    <AnimatedIcon />
                    {!showDetails ?
                        < div ref={timelineRef} >
                            <AnimateTimeline
                                activePage={activePage}
                                handleTimeClick={handleTimeClick}
                            />
                            <AnimatedGrid
                                activePage={activePage}
                                handleCardClick={(index) => handleCardClick(index)}
                                handleHeight={(height) => handleHeight(height)}
                                handleActiveCard={(item) => handleActiveCard(item)}
                            />
                        </ div>
                        :
                        <Modal
                            open={openModal}
                            onClose={() => setOpenModal(false)}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                            hideBackdrop={true}
                            style={{overflow: "auto"}}
                        >
                            <ResumeDetails
                                handleDetailsChange={() => handleDetailsChange()}
                                activeCard={activeCard}
                            />
                        </Modal>
                    }
                </div>
            </Fade>
        </div >
    );
}

export default React.memo(Resume);