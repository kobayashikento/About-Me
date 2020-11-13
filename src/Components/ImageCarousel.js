import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-bootstrap/Carousel';
import ImageCarouselItem from '../Components/ImageCarouselItem.js';
import Tooltip from '@material-ui/core/Tooltip';

import 'bootstrap/dist/css/bootstrap.min.css';

const ImageCarousel = (props) => {
    //Get the array of img srcs 
    const imgs = props.srcs
    const [index, setIndex] = React.useState(1);
    const handleChange = (event, value) => {
        setIndex(value)
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {imgs.map((src, key) => {
                return (
                    <Typography key={`carouselimg${key}`} variant="h6" style={{ display: key === index - 1 ? "" : "none", padding: "1rem" }}>
                        {src.description}
                    </Typography>
                )
            })}
            <Carousel activeIndex={index - 1} controls={false} indicators={false} wrap={false}>
                {imgs.map((src, key) => {
                    return (
                        <Carousel.Item key={`carousel${key}`} onClick={() => props.handleOpen()} style={{ cursor: "pointer" }}>
                            <Tooltip title="Click for more details" placement="top">
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img src={src.src} alt="" style={{ width: "80%", height: "50%", borderRadius: "3px" }} />
                                    <ImageCarouselItem
                                        src={src}
                                        key={key}
                                        open={props.open}
                                        handleClose={() => props.handleClose()}
                                    />
                                </div>
                            </Tooltip>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
            <Pagination shape="rounded" count={imgs.length} page={index} onChange={handleChange} style={{ paddingTop: "1rem" }} />
        </div >
    )
}


export default React.memo(ImageCarousel)