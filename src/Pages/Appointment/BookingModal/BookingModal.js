import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

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




const BookingModal = ({ openBookingModal, handleBookingClose, booking, date, setBookingSuccess }) => {
    const { name, time } = booking;
    const { user } = useAuth();
    const initialBookingInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialBookingInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newBookingInfo = { ...bookingInfo }
        newBookingInfo[field] = value;
        setBookingInfo(newBookingInfo);
    }

    const handleBookingSubmit = e => {
        //collect date
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        //send to database
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleBookingClose()
                }
            });


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
                            onBlur={handleOnBlur}
                            name='patientName'
                            defaultValue={user.displayName}
                            id="outlined-size-small"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            label="Your Email"
                            onBlur={handleOnBlur}
                            name='email'
                            defaultValue={user.email}
                            id="outlined-size-small"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            label="Your Phone Number"
                            onBlur={handleOnBlur}
                            name='phone'
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