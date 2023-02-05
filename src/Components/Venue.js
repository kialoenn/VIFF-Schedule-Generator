import React from 'react';
import '../css/Schedule.css'

const Venue = (prop) => {
    return (
        <div className='venueRow'>
            <div className='venue'>{prop.venueDetail.venueName}</div>
            <div className='screen'>
                {prop.venueDetail.screens.map((element, index) => {
                    return (
                        <div className='screenBox'>
                            {element.screenTitle + " | "}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Venue