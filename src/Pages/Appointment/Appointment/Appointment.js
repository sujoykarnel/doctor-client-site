import React from 'react';
import NavigationBar from '../../Shared/Navigation/NavigationBar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    console.log(date)
    return (
        <div>
            <NavigationBar></NavigationBar>
            <AppointmentHeader date={date} setDate={setDate} ></AppointmentHeader>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;