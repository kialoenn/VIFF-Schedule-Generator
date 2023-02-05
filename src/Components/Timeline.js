import React from 'react';
import '../css/Schedule.css'

const Timeline = (prop) => {
    return (
        <div className='timelineRow'>
            <div className='timelineDate'>{prop.date}</div>
            <div className='timeline'>
                10:30am 10:30am 10:30am 10:30am 10:30am 10:30am 10:30am
            </div>
        </div>
    );
};

export default Timeline