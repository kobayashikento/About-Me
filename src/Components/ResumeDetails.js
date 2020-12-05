import React from 'react'

import Container from '@material-ui/core/Container';
import { IconButton, Typography, Grid } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import ImageCarousel from '../Components/ImageCarousel.js';
import Divider from '@material-ui/core/Divider';
import { withStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const ResumeDetails = (props) => {
    // props send in the item 
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const handleClick = () => {
        props.handleDetailsChange()
    }

    const StyledTypography = withStyles(({
        root: {
            fontWeight: "bold"
        },
    }))(Typography)

    return (
        props.activeCard !== null ?
            <Container maxWidth={props.mobile ? "xs" : "md"} style={{
                paddingRight: "8px", display: "flex", flexDirection: "column", backgroundColor: "white", marginTop: "5rem", borderRadius: "10px", marginBottom: "3rem",
                marginRight: "auto", marginLeft: "auto"
            }}>
                {/* Header  */}
                <React.Fragment>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="flex-start"
                        style={{ marginTop: "16px" }}
                    >
                        <Grid item xs={3} style={{ marginTop: "32px" }} align="center">
                            <img alt={`${props.activeCard.title}img`} src={props.activeCard.img} style={{ width: props.activeCard.imgWidth, height: props.activeCard.imgHeight }} />
                        </Grid>
                        <Grid item xs={8} style={{ marginTop: "16px" }} fontWeight="fontWeightBold">
                            <StyledTypography variant={props.mobile ? "h6" : "h5"} style={{ margin: "4px" }}>
                                {props.activeCard.title}
                            </StyledTypography>
                            <Typography variant={props.mobile ? "body1" : "h6"} style={{ margin: "4px" }}>
                                {props.activeCard.titleDescription}
                            </Typography>
                            <Typography variant={props.mobile ? "body2" : "body1"} style={{ margin: "4px" }}>
                                {props.activeCard.date}
                            </Typography>
                        </Grid>
                        <Grid item xs={1} align="center">
                            <IconButton size="small" style={{ marginLeft: "auto", height: "fit-content", marginTop: "8px" }} onClick={() => handleClick()}>
                                <CancelIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <div style={{ whiteSpace: "pre-wrap", textIndent: props.mobile ? "1rem" : "2rem", margin: props.mobile ? "" : "2rem" }}>
                        <Typography variant="body1" style={{ margin: "8px" }} align="justify">
                            {props.activeCard.bodySummary.split("\n").map((i, key) => {
                                // Create link by detecting \r
                                if (key === 0) {
                                    return null;
                                } else if (/\r/.test(i)) {
                                    let match1 = /^[^\r]+/.exec(i)
                                    let match2 = /\r(.*)/.exec(i)
                                    return (
                                        <div key={`${props.activeCard.title}link${key}`}>
                                            {match1}
                                            <a href={match2} style={{ textDecoration: "none" }}>{props.activeCard.urlDescription}</a>
                                        </div>
                                    )
                                } else if (/\f/.test(i)) {
                                    // make colums 1, when size is less than xs
                                    return (
                                        <ul style={{ columns: matches ? "2" : "1", margin: props.mobile ? "" : "1rem", paddingBottom: "1rem", textAlign: "left" }}>
                                            {i.split("\v").map((item, index) => {
                                                if (index !== 0) {
                                                    return (
                                                        <li style={{ textIndent: "-1em", padding: "0px 0 10px 20px" }} key={`listitem${index}`}>{item}</li>
                                                    )
                                                } else {
                                                    return null
                                                }
                                            })}
                                        </ul>
                                    )
                                } else if (key === 1) {
                                    return <p style={{ backgroundColor: "rgb(240, 247, 238)", borderRadius: "3px", padding: "8px" }} key={`${props.activeCard.title}summaryParagraph${key}`}>{i}</p>;
                                } else {
                                    return <p style={{ padding: "8px" }} key={`${props.activeCard.title}paragraph${key}`}>{i}</p>;
                                }
                            })}
                        </Typography>
                        {props.activeCard.additionalImage === true ?
                            <div>
                                <Divider style={{ marginTop: "3rem" }} variant="middle" />
                                <ImageCarousel
                                    srcs={props.activeCard.additionalSrc}
                                />
                            </div>
                            : null}
                    </div>
                </React.Fragment>
            </Container>
            :
            <React.Fragment />
    )
}

export default ResumeDetails 