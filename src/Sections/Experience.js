import React from 'react';

import ResumeParallax from '../Components/ResumeParallax.js';
import AnimateTimeline from '../Components/AnimatedTimeline.js';
import AnimatedGrid from '../Components/AnimatedGrid.js';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

import { Transition } from 'react-spring/renderprops'

import ResumeDetails from '../Components/ResumeDetails.js';

const Experience = (props) => {

    const [cardIndex, setCardIndex] = React.useState(0);
    const [activePage, setActivePage] = React.useState(0);
    const [activeCard, setActiveCard] = React.useState(null);
    const [showDetails, setShowDetails] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);

    // Handle timeline click on the experience section
    const handleTimeClick = (index) => {
        setActivePage(index);
        setCardIndex(0);
    }

    // Handle card open event
    const handleCardClick = (index) => {
        if (index !== 0) {
            setShowDetails(true);
            setShowModal(true);
        }
    }

    // Change the active card and send it as an object
    const handleActiveCard = (item) => {
        setActiveCard(item);
    }

    // Handle card click 
    const handleDetailsChange = () => {
        setShowModal(false);
        setTimeout(() => {
            setShowDetails(false);
            setActiveCard(null);
        }, 300)
    }

    // Detect esc button
    React.useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);

    // Detect esc buttton to close modal 
    const escFunction = React.useCallback((event) => {
        if (event.keyCode === 27) {
            setShowModal(false);
            setTimeout(() => {
                setShowDetails(false);
                setActiveCard(null);
            }, 500)
        }
    }, []);

    return (
        props.mobile ?
            <div style={{ background: props.theme.darkestColor }}>
                <div
                    style={{
                        display: "flex", flexDirection: "column",
                        alignItems: "center", justifyContent: "flex-start", minHeight: "95vh"
                    }}
                >
                    <div style={{ padding: "16px", paddingTop: "4.4vmax" }}>
                        <ResumeParallax
                            mobile={props.mobile}
                            cardIndex={cardIndex}
                            theme={props.theme}
                            render={true}
                        />
                    </div>
                    <div style={{
                        maxWidth: "100%", display: "flex", justifyContent: "center", padding: "16px",
                    }}>
                        <AnimateTimeline
                            mobile={props.mobile}
                            theme={props.theme}
                            activePage={activePage}
                            handleTimeClick={(index) => handleTimeClick(index)}
                        />
                    </div>
                    <div style={{
                        maxWidth: "100%", display: "flex", justifyContent: "center",
                        alignItems: "center", overflow: "hidden", padding: "16px"
                    }}>
                        <AnimatedGrid
                            mobile={props.mobile}
                            theme={props.theme}
                            cardIndex={cardIndex}
                            activePage={activePage}
                            handleActiveCard={(item) => handleActiveCard(item)}
                            handleCardClick={(index) => handleCardClick(index)}
                        />
                    </div>
                    <Modal
                        open={showDetails}
                        onClose={() => handleDetailsChange()}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                        style={{ overflow: "auto" }}
                    >
                        <Transition
                            items={showModal}
                            from={{ opacity: 0, transform: "translate(0, 200px)" }}
                            enter={{ opacity: 1, transform: "translate(0, 0px)" }}
                            leave={{ opacity: 0, transform: "translate(0, 180px)" }}>
                            {showModal => showModal && (props =>
                                <div style={props}>
                                    <ResumeDetails
                                        mobile={props.mobile}
                                        handleDetailsChange={() => handleDetailsChange()}
                                        activeCard={activeCard}
                                    />
                                </div>)}
                        </Transition>
                    </Modal>
                </div>
            </div>
            :
            <div
                style={{
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center", minHeight: "95vh"
                }}
            >
                <div style={{ margin: "1.1vmax", paddingTop: "1.2vmax", position: "absolute", top: "0px" }}>
                    <ResumeParallax
                        mobile={props.mobile}
                        cardIndex={cardIndex}
                        theme={props.theme}
                        render={true}
                    />
                </div>
                <div style={{
                    maxWidth: "100%", display: "flex", justifyContent: "center", margin: "1.1vmax", position: "absolute",
                    paddingTop: "7.7vmax", top: "0px"
                }}>
                    <AnimateTimeline
                        mobile={props.mobile}
                        theme={props.theme}
                        activePage={activePage}
                        handleTimeClick={(index) => handleTimeClick(index)}
                    />
                </div>
                <div style={{ maxWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", paddingTop: "180px", paddingBottom: "40px" }}>
                    <AnimatedGrid
                        mobile={props.mobile}
                        theme={props.theme}
                        cardIndex={cardIndex}
                        activePage={activePage}
                        handleActiveCard={(item) => handleActiveCard(item)}
                        handleCardClick={(index) => handleCardClick(index)}
                    />
                </div>
                <Modal
                    open={showDetails}
                    onClose={() => handleDetailsChange()}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                    style={{ overflow: "auto" }}
                >
                    <Transition
                        items={showModal}
                        from={{ opacity: 0, transform: "translate(0, 200px)" }}
                        enter={{ opacity: 1, transform: "translate(0, 0px)" }}
                        leave={{ opacity: 0, transform: "translate(0, 180px)" }}>
                        {showModal => showModal && (props =>
                            <div style={props}>
                                <ResumeDetails
                                    mobile={props.mobile}
                                    handleDetailsChange={() => handleDetailsChange()}
                                    activeCard={activeCard}
                                />
                            </div>)}
                    </Transition>
                </Modal>
            </div>
    )
}

export default React.memo(Experience)