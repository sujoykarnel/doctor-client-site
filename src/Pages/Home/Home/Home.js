import React from 'react';
import Services from '../Services/Services';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>

        </div>
    );
};

export default Home;