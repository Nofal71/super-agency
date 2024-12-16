import React, { useState } from "react";
import { Modal, Box, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { PlayArrow } from '@mui/icons-material';


const VideoModal = ({ videoSrc }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 2,
        outline: "none",
        borderRadius: "8px",
    };

    const embedUrl = videoSrc.includes("youtube.com") || videoSrc.includes("youtu.be")
        ? videoSrc.replace("watch?v=", "embed/").replace("youtu.be/", "youtube.com/embed/")
        : videoSrc;

    return (
        <>
            <Button
             onClick={handleOpen}
                variant="outlined"
                startIcon={<PlayArrow />}
                sx={{
                    color: '#343a40',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: '20px',
                    borderColor: '#343a40',
                    px: 3,
                    py: 1,
                    '&:hover': {
                        backgroundColor: '#343a40',
                        color: '#fff',
                    },
                }}
            >
                Watch Video
            </Button>

            <Modal open={open} onClose={handleClose} aria-labelledby="video-modal">
                <Box sx={style}>
                    <IconButton
                        sx={{ position: "absolute", top: 10, right: 10 }}
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>

                    {embedUrl.includes("youtube.com/embed/") ? (
                        <iframe
                            src={embedUrl}
                            title="YouTube video"
                            width="100%"
                            height="400px"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ borderRadius: "8px" }}
                        ></iframe>
                    ) : (
                        <video
                            src={embedUrl}
                            controls
                            style={{ width: "100%", borderRadius: "8px" }}
                        >
                            Your browser does not support the video tag.
                        </video>
                    )}
                </Box>
            </Modal>
        </>
    );
};

export default VideoModal;
