import React from 'react'

import Fade from 'react-reveal'

import { AnimatedIcon, AnimateTimeline, AnimatedGrid } from '../Components/AnimatedResume.js';
import ResumeDetails from '../Components/ResumeDetails.js';
import { Modal, Backdrop } from '@material-ui/core'

const shadow = "0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.20)";

const Resume = (props) => {
    // 0-none, 1-education, 2-work, 3-extra
    const [activePage, setActivePage] = React.useState(0);
    const [activeCard, setActiveCard] = React.useState(null);
    const [height, setHeight] = React.useState(window.innerHeight * 3);
    const [showDetails, setShowDetails] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    const [cardIndex, setCardIndex] = React.useState(0);

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
        if (height === 0) {
            setHeight(window.innerHeight)
        } else if (height < window.innerHeight) {
            setHeight(window.innerHeight + 24)
        } else {
            setHeight(height + 120)
        }
    }
    const handleDetailsChange = () => {
        setShowDetails(!showDetails);
    }
    const handleTimeClick = (index) => {
        setActivePage(index);
        setCardIndex(0);

    }

    const handleNavClick = (direction) => {
        if (direction === "left") {
            setCardIndex(cardIndex - 1);
        } else if (direction === "right") {
            setCardIndex(cardIndex + 1);
        }
    }


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
                                handleNavClick={(index) => handleNavClick(index)}
                                cardIndex={cardIndex}
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
                            style={{ overflow: "auto" }}
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