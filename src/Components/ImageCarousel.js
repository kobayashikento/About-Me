import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-bootstrap/Carousel';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';

import Tooltip from '@material-ui/core/Tooltip';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/carouselStyle.css';

const ImageCarousel = (props) => {
    //Get the array of img srcs 
    const imgs = props.srcs
    const [index, setIndex] = React.useState(1);
    const [modalIndex, setModalIndex] = React.useState(0);

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
                    <div style={{ display: key === index - 1 ? "" : "none", margin: "2rem" }}>
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
                        <Carousel.Item key={`carousel${key}`} style={{ cursor: "pointer" }} onClick={handleOpen}>
                            <Tooltip title="Click for more details" placement="top">
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img src={src.src} alt="" style={{ width: "80%", height: "50%", borderRadius: "5px" }} />
                                </div>
                            </Tooltip>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
            <Pagination shape="rounded" count={imgs.length} page={index} onChange={handleChange} style={{ marginTop: "2rem", alignSelf: "center" }} />
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <div style={{ width: "90%", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display: "flex" }}>
                    <Carousel onSelect={handleSelect} indicators={false} activeIndex={modalIndex} interval={null}  >
                        {imgs.map((src, key) => {
                            return (
                                <Carousel.Item key={`carousel${key}-modal`} >
                                    <img style={{ width: "90%", transform: "translate(6%)", borderRadius: "10px" }} src={src.src} alt="" />
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                    <IconButton size="small" style={{ marginLeft: "auto", height: "fit-content", marginTop: "8px", color: "white" }} onClick={() => setOpen(false)} >
                        <CancelIcon />
                    </IconButton>
                </div>
            </Modal>
        </div >
    )
}


export default React.memo(ImageCarousel)