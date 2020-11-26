import React from 'react';

import { Fade, Slide } from 'react-reveal';

import { useTransition, animated } from 'react-spring';

import { AnimatedIcon, AnimateTimeline, AnimatedGrid } from '../Components/AnimatedResume.js';
import ResumeDetails from '../Components/ResumeDetails.js';

const Resume = (props) => {
    // 0-none, 1-education, 2-work, 3-extra
    // timeline index
    const [activePage, setActivePage] = React.useState(props.index);
    // object that contains information about the card
    const [activeCard, setActiveCard] = React.useState(null);
    const [showDetails, setShowDetails] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const [showContainer, setShowContainer] = React.useState(true);
    // index of card in carousesl view
    const [cardIndex, setCardIndex] = React.useState(0);
    const [height, setHeight] = React.useState(window.innerHeight);

    const handleActiveCard = (item) => {
        setActiveCard(item);
    }
    const handleCardClick = (index) => {
        if (index !== 0) {
            setShow(true);
            setShowDetails(true);
        }
    }
    const handleDetailsChange = () => {
        setShow(false);
        setActiveCard(null)
        setTimeout(() => {
            setShowDetails(false);
        }, 300)
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

    const conatinerTrans = useTransition(showContainer, null, {
        from: { position: 'absolute', opacity: 1, transform: 'translate3d(0%,100%,0)', background:  "linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)", zIndex: "-1" },
        enter: { position: 'absolute', opacity: 1, transform: 'translate3d(0%,0%,0)', background: "linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)", zIndex: "-1" },
        leave: { position: 'absolute', opacity: 0, transform: 'translate3d(0%,-100%,0)', background: "linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)", zIndex: "-1" },
    })

    return (
        <React.Fragment>
            {conatinerTrans.map(({ item, key, props }) => (
                item && <animated.div key={key} style={{ ...props, width: "100%", height: "100%"}} />
            ))}
            <div style={{
                height: activeCard === 0 ? "" : height, overflowX: "hidden", overflowY: "auto",
            }}>
                <AnimatedIcon />
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
                <Fade duration={700} bottom when={show}>
                    <ResumeDetails
                        handleDetailsChange={() => handleDetailsChange()}
                        activeCard={activeCard}
                    />
                </Fade>
            </div>
        </React.Fragment>
    );
}

export default React.memo(Resume);