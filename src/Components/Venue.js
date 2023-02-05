import React from 'react';
import '../css/Schedule.css'

const Venue = (prop) => {
    return (
        <div className='venueRow' style={{ display: 'flex' }}>
            <div className='venue' style={{ width: '10%', backgroundColor: 'grey' }}>{prop.venueDetail.venueName}</div>
            <div className='screen' style={{ width: '90%', backgroundColor: 'red' }}>
                {prop.venueDetail.screens.map((element, index) => {
                    return (
                        <div style={{ display: 'inline' }}>
                            {element.screenTitle + " | "}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Venue