import { BorderAll } from '@material-ui/icons';
import React from 'react'

import { Redirect } from 'react-router-dom';

import { Fade, Slide } from 'react-reveal'

import { AnimatedIcon, AnimateTimeline, AnimatedGrid } from '../Components/AnimatedResume.js';
import ResumeDetails from '../Components/ResumeDetails.js';

const Resume = (props) => {
    // 0-none, 1-education, 2-work, 3-extra
    // timeline index
    const [activePage, setActivePage] = React.useState(props.index);
    // object that contains information about the card
    const [activeCard, setActiveCard] = React.useState(null);
    const [showDetails, setShowDetails] = React.useState(false);
    // index of card in carousesl view
    const [cardIndex, setCardIndex] = React.useState(0);
    const [height, setHeight] = React.useState(window.innerHeight);

    const handleActiveCard = (item) => {
        setActiveCard(item);
    }
    const handleCardClick = (index) => {
        if (index !== 0) {
            setShowDetails(true);
        }
    }
    const handleDetailsChange = () => {
        setShowDetails(false);
        setActiveCard(null);
    }
    const handleTimeClick = (index) => {
        switch (index) {
            case 0:
                window.history.replaceState(null, "Display All", "/resume/all")
                break;
            case 1:
                window.history.replaceState(null, "Display Education", "/resume/education")
                break;
            case 2:
                window.history.replaceState(null, "Display Experience", "/resume/experience")
                break;
            case 3:
                window.history.replaceState(null, "Display Skills", "/resume/skills")
                break;
            case 4:
                window.history.replaceState(null, "Display Activities", "/resume/activities")
                break;
            default:
        }
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

    React.useLayoutEffect(() => {
        function updateSize() {
            setHeight(window.innerHeight);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <div style={{
            height: activeCard === 0 ? "" : height, background: "linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)",
            overflowX: "hidden", overflowY: activePage !== 0 ? "auto" : "auto"
        }}>
            <AnimatedIcon />
            <Slide bottom when={!showDetails} style={{ width: "100%", height: "100%" }}>
                {!showDetails ?
                    <React.Fragment>
                        <AnimateTimeline
                            activePage={activePage}
                            handleTimeClick={handleTimeClick}
                        />
                        <AnimatedGrid
                            activePage={activePage}
                            handleCardClick={(index) => handleCardClick(index)}
                            handleActiveCard={(item) => handleActiveCard(item)}
                            handleNavClick={(index) => handleNavClick(index)}
                            cardIndex={cardIndex}
                        />
                    </React.Fragment>
                    : <React.Fragment />}
            </Slide>
            <Fade bottom when={showDetails}>
                <ResumeDetails
                    handleDetailsChange={() => handleDetailsChange()}
                    activeCard={activeCard}
                />
            </Fade>
        </div>
    );
}

export default React.memo(Resume);