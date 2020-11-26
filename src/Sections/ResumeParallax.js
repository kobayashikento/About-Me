import React from 'react'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import { AnimateTimeline, AnimatedGrid } from '../Components/AnimatedResume.js';

import ResumeDetails from '../Components/ResumeDetails.js';

const ResumeParallax = (props) => {
    const [activeCard, setActiveCard] = React.useState(null);
    const [showDetails, setShowDetails] = React.useState(false);

    const handleCardClick = (index) => {
        if (index !== 0) {
            setShowDetails(true);
            props.handleCardOpen()
        }
    }

    const handleActiveCard = (item) => {
        setActiveCard(item);
    }

    const handleDetailsChange = () => {
        setActiveCard(null)
        setTimeout(() => {
            setShowDetails(false);
            props.handleCardClose()
        }, 300)
    }

    return (
        <React.Fragment>
            <Container maxWidth="md" style={{ paddingTop: "2%", display: "flex", flexDirection: "column", paddingBottom: "1rem" }}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={2} style={{ display: "flex", justifyContent: "center" }}>
                    </Grid>
                    <Grid item xs={9}>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                            <Typography variant="h4" style={{ color: props.theme.priColor, fontWeight: "bold" }}>
                                2.
                                </Typography>
                            <Typography variant="h4" style={{ color: props.theme.priTxtColor, paddingLeft: "1rem", fontWeight: "bold" }}>
                                My Experiences
                             </Typography>
                            <Divider style={{ marginLeft: "2rem", width: "18rem", backgroundColor: props.theme.priTxtColor }} />
                        </div>
                        <Typography variant="body1" style={{ color: props.theme.priTxtColor, textIndent: "1rem", paddingLeft: "1rem", marginBottom: "1rem" }}>
                            Throughout my undergraduate years and my work in Chicago, I have acquired the knowledge which I intend show through this interactive display below.
                        </Typography>
                    </Grid>
                    <Grid item xs={1} style={{ display: "flex", justifyContent: "center" }}>
                    </Grid>
                </Grid>
            </Container >
            <AnimateTimeline
                theme={props.theme}
                activePage={props.activePage}
                handleTimeClick={(index) => props.handleTimeClick(index)}
            />
            {!showDetails ?
                <AnimatedGrid
                    theme={props.theme}
                    cardIndex={props.cardIndex}
                    activePage={props.activePage}
                    handleNavClick={(dir) => props.handleArrowClick(dir)}
                    handleActiveCard={(item) => handleActiveCard(item)}
                    handleCardClick={(index) => handleCardClick(index)}
                /> :
                <ResumeDetails
                    handleDetailsChange={() => handleDetailsChange()}
                    activeCard={activeCard}
                />
            }

        </React.Fragment>
    )
}

export default React.memo(ResumeParallax)