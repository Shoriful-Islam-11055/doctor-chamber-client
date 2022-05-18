import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableServices from './AvailableServices';
import AvailableSlots from './AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date = {date} setDate = {setDate}></AppointmentBanner>
            <AvailableSlots date = {date} setDate = {setDate}></AvailableSlots>
        </div>
    );
};

export default Appointment;