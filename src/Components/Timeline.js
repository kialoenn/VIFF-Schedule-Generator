import React from 'react';
import '../css/Schedule.css'

const Timeline = (prop) => {
    return (
        <div className='timelineRow'>
            <div className='timelineDate'>{prop.date}</div>
            <div className='timeline'>
                <div className='time1'>9:00AM</div>
                <div className='time2'>10:00AM</div>
                <div className='time3'>11:00AM</div>
                <div className='time4'>12:00PM</div>
                <div className='time5'>1:00PM</div>
                <div className='time6'>2:00PM</div>
                <div className='time7'>3:00PM</div>
                <div className='time8'>4:00PM</div>
                <div className='time9'>5:00PM</div>
                <div className='time10'>6:00PM</div>
                <div className='time11'>7:00PM</div>
                <div className='time12'>8:00PM</div>
                <div className='time13'>9:00PM</div>
                <div className='time14'>10:00PM</div>
                <div className='time15'>11:00PM</div>
            </div>
        </div>
    );
};

export default Timeline