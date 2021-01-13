import React from 'react'

import { IconButton, Typography, Grid } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import ImageCarousel from '../Components/ImageCarousel.js';
import Divider from '@material-ui/core/Divider';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const ResumeDetails = (props) => {
    // props send in the item 
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const handleClick = () => {
        props.handleDetailsChange()
    }

    return (
        props.activeCard !== null ? props.mobile ?
            <div style={{
                backgroundColor: "white", marginTop: "5rem", borderRadius: "10px", width: "90%", top: "0%", left: "50%", transform: "translate(-50%, 0%)", position: "absolute"
            }}>
                {/* Header  */}
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    style={{ marginTop: "16px", marginBottom: "6.6vmax", width: "100%" }}
                    spacing={3}
                >
                    <Grid item xs={3} style={{ margin: "0px", marginLeft: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }} >
                        <img alt={`${props.activeCard.title}img`} src={props.activeCard.img} style={{ width: props.activeCard.imgWidth, height: props.activeCard.imgHeight }} />
                    </Grid>
                    <Grid item xs={7} style={{ margin: "0px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }} >
                        <Typography variant={props.mobile ? "body1" : "h5"} style={{ margin: "2px", fontWeight: "bold", fontFamily: "'Quicksand', sans-serif" }}>
                            {props.activeCard.title}
                        </Typography>
                        <Typography variant={props.mobile ? "body2" : "h6"} style={{ margin: "2px", fontFamily: "'Quicksand', sans-serif" }}>
                            {props.activeCard.titleDescription}
                        </Typography>
                        <Typography variant={props.mobile ? "body2" : "body1"} style={{ margin: "2px", fontFamily: "'Quicksand', sans-serif" }}>
                            {props.activeCard.date}
                        </Typography>
                    </Grid>
                    <Grid item xs={1} style={{ margin: "0px", display: "flex", alignSelf: "flex-start", paddingRight: "1rem" }}>
                        <IconButton size="small" style={{ height: "fit-content", marginTop: "8px" }} onClick={() => handleClick()}>
                            <CancelIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <div style={{ whiteSpace: "pre-wrap", textIndent: props.mobile ? "1rem" : "2rem", margin: props.mobile ? "" : "2rem" }}>
                    <Typography variant="body2" style={{ margin: "8px", fontFamily: "'Roboto', sans-serif" }} align="justify">
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
                        <div style={{ paddingBottom: "6.6vmax" }}>
                            <Divider style={{ marginTop: "3rem" }} variant="middle" />
                            <ImageCarousel
                                mobile={props.mobile}
                                srcs={props.activeCard.additionalSrc}
                            />
                        </div>
                        : null}
                </div>
            </div>
            :
            <div style={{
                backgroundColor: "white", marginTop: "5rem", borderRadius: "10px", marginBottom: "3rem", width: "960px", top: "0%", left: "50%", transform: "translate(-50%, 0%)", position: "absolute"
            }}>
                {/* Header  */}
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    style={{ marginTop: "16px" }}
                >
                    <Grid item xs={3} style={{ margin: "0px", marginLeft: "2rem", display: "flex", alignItems: "center", justifyContent: "center" }} >
                        <img alt={`${props.activeCard.title}img`} src={props.activeCard.img} style={{ width: props.activeCard.imgWidth, height: props.activeCard.imgHeight }} />
                    </Grid>
                    <Grid item xs={7} style={{ margin: "0px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }} >
                        <Typography style={{ fontSize: "32px", lineHeight: "54px", paddingTop: "2.2vmax", fontWeight: "bold", fontFamily: "'Merriweather', serif" }}>
                            {props.activeCard.title}
                        </Typography>
                        <Typography style={{ fontSize: "20px", lineHeight: "34px", fontFamily: "'Quicksand', sans-serif" }}>
                            {props.activeCard.titleDescription}
                        </Typography>
                        <Typography style={{ fontSize: "16px", lineHeight: "28px", fontFamily: "'Quicksand', sans-serif" }}>
                            {props.activeCard.date}
                        </Typography>
                    </Grid>
                    <Grid item xs={1} style={{ margin: "0px", display: "flex", alignSelf: "flex-start" }}>
                        <IconButton size="small" style={{ height: "fit-content", marginTop: "8px" }} onClick={() => handleClick()}>
                            <CancelIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <div style={{ whiteSpace: "pre-wrap", textIndent: props.mobile ? "1rem" : "2rem", margin: props.mobile ? "" : "2rem" }}>
                    <Typography style={{ margin: "8px", fontSize: "16px", fontFamily: "'Quicksand', sans-serif", lineHeight: "28px" }} align="justify">
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
                                mobile={props.mobile}
                                srcs={props.activeCard.additionalSrc}
                            />
                        </div>
                        : null}
                </div>
            </div>
            :
            <React.Fragment />
    )
}

export default ResumeDetails 