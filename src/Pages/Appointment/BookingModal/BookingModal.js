import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};




const BookingModal = ({ openBookingModal, handleBookingClose, booking, date }) => {
    const { name, time } = booking;

    const handleBookingSubmit = e => {
        alert('Booking Submitted.')

        //collect date
        //send to database

        handleBookingClose()
        e.preventDefault()
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBookingModal}
            onClose={handleBookingClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={openBookingModal}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>

                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            sx={{
                                width: '90%', m: 1,
                            }}
                            label="Time"
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            label="Your Name"
                            id="outlined-size-small"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            label="Your Email"
                            id="outlined-size-small"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            label="Your Phone Number"
                            id="outlined-size-small"
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            label="Your Phone Number"
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <Button type='submit' variant="contained">Booking</Button>
                    </form>

                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;