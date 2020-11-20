import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-bootstrap/Carousel';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';

import Fade from 'react-reveal';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/carouselStyle.css';

const ImageCarousel = (props) => {
    //Get the array of img srcs 
    const imgs = props.srcs;
    const [index, setIndex] = React.useState(1);
    const [modalIndex, setModalIndex] = React.useState(0);
    const [hover, setHover] = React.useState(false);
    const handleChange = (event, value) => {
        setIndex(value)
    }
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleSelect = (selectedIndex, e) => {
        setModalIndex(selectedIndex);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {imgs.map((src, key) => {
                return (
                    <div style={{ display: key === index - 1 ? "" : "none", margin: "1rem" }}>
                        <Typography key={`carouselimg${key}-descrip`} variant="h6" >
                            {src.description}
                        </Typography>
                        <Typography key={`carouselimg${key}-subtitle`} variant="body1">
                            {src.subtitle}
                        </Typography>
                    </div>
                )
            })}
            <Carousel activeIndex={index - 1} indicators={false} wrap={false}>
                {imgs.map((src, key) => {
                    return (
                        <Carousel.Item key={`carousel${key}`} style={{ cursor: "pointer" }} onClick={handleOpen} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                            <img src={src.src} className={hover ? "imageHover" : "image"} alt="" />
                            <Typography className={hover ? "overlay" : "overlayHide"} variant="h6">View Image</Typography>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
            <Pagination shape="rounded" count={imgs.length} page={index} onChange={handleChange} style={{ marginTop: "1rem", alignSelf: "center" }} />
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade bottom style={{ width: "90%", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display: "flex" }}>
                    <IconButton style={{ right: "5rem", position: "absolute", height: "fit-content", marginTop: "2rem", color: "white", zIndex: "2" }} onClick={() => setOpen(false)} >
                        <CancelIcon />
                    </IconButton>
                    <Carousel onSelect={handleSelect} indicators={false} activeIndex={modalIndex} interval={null} style={{ marginTop: "4rem" }} >
                        {imgs.map((src, key) => {
                            return (
                                <Carousel.Item key={`carousel${key}-modal`} >
                                    <img style={{ width: "80%", transform: "translate(12%)", borderRadius: "10px" }} src={src.src} alt="" />
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </Fade>
            </Modal>
        </div >
    )
}


export default React.memo(ImageCarousel)