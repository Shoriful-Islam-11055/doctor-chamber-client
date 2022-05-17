import React from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableServices from './AvailableServices';
import AvailableSlots from './AvailableSlots';

const Appointment = () => {
    return (
        <div>
            <AppointmentBanner></AppointmentBanner>
            <AvailableServices></AvailableServices>
            <AvailableSlots></AvailableSlots>
        </div>
    );
};

export default Appointment;