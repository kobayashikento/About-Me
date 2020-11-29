import React from 'react'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import { Transition } from 'react-spring/renderprops';

import { AnimateTimeline, AnimatedGrid } from '../Components/AnimatedResume.js';



const ResumeParallax = (props) => {

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
                        <div style={{ display: "flex", alignItems: "center", marginBottom: "2rem" }}>
                            <Typography variant="h5" style={{ color: props.theme.priColor, fontWeight: "bold" }}>2.</Typography>
                            <Typography variant="h4" style={{ color: props.theme.priTxtColor, paddingLeft: "1rem", fontWeight: "bold" }}>
                                My Experiences
                             </Typography>
                            <Divider style={{ marginLeft: "3rem", width: "13rem", backgroundColor: props.theme.secColor }} />
                        </div>
                        <Typography variant="body1" style={{ color: props.theme.priTxtColor, textIndent: "1rem", paddingLeft: "1rem", marginBottom: "1rem" }}>
                            Throughout my undergraduate years and my work in Chicago, I have acquired the knowledge which I intend show through this interactive display below.
                        </Typography>
                    </Grid>
                    <Grid item xs={1} style={{ display: "flex", justifyContent: "center" }}>
                    </Grid>
                </Grid>
            </Container >
        </React.Fragment>
    )
}

export default React.memo(ResumeParallax)