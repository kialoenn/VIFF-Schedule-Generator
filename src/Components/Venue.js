import React from 'react';
import '../css/Schedule.css'

const Venue = (prop) => {
    return (
        <div className='venueRow'>
            <div className='venue'>{prop.venueDetail.venueName}</div>
            <div className='screen'>
                {prop.venueDetail.screens.map((element, index) => {
                
                    return (
                        <>
                        <div className='screen1'></div>
                        <div className='screen2'></div>
                        <div className='screen3'></div>
                        <div className='screen4'></div>
                        <div className='screen5'></div>
                        <div className='screen6'></div>
                        <div className='screen7'></div>
                        <div className='screen8'></div>
                        <div className='screen9'></div>
                        <div className='screen10'></div>
                        <div className='screen11'></div>
                        <div className='screen12'></div>
                        <div className='screen13'></div>
                        <div className='screen14'></div>
                        <div className='screen15'></div>
                        <div className='screen16'></div>
                        <div className='screen17'></div>
                        <div className='screen18'></div>
                        <div className='screen19'></div>
                        <div className='screen20'></div>
                        <div className='screen21'></div>
                        <div className='screen22'></div>
                        <div className='screen23'></div>
                        <div className='screen24'></div>
                        <div className='screen25'></div>
                        <div className='screen26'></div>
                        <div className='screen27'></div>
                        <div className='screen28'></div>
                        <div className='screen29'></div>
                        <div className='screen30'></div>
                        <div className='screen31'></div>
                        <div className='screen32'></div>
                        <div className='screen33'></div>
                        <div className='screen34'></div>
                        <div className='screen35'></div>
                        <div className='screen36'></div>
                        <div className='screen37'></div>
                        <div className='screen38'></div>
                        <div className='screen39'></div>
                        <div className='screen40'></div>
                        <div className='screen41'></div>
                        <div className='screen42'></div>
                        <div className='screen43'></div>
                        <div className='screen44'></div>
                        <div className='screen45'></div>
                        <div className='screen46'></div>
                        <div className='screen47'></div>
                        <div className='screen40'></div>
                        <div className='screen41'></div>
                        <div className='screen42'></div>
                        <div className='screen43'></div>
                        <div className='screen48'></div>
                        <div className='screen49'></div>
                        <div className='screen50'></div>
                        <div className='screen51'></div>
                        <div className='screen52'></div>
                        <div className='screen53'></div>
                        <div className='screen54'></div>
                        <div className='screen55'></div>
                        <div className='screen56'></div>
                        <div className='screen57'></div>
                        <div className='screen58'></div>
                        <div className='screen59'></div>
                        <div className='screen60'></div>

                        </>
                    )
                })}
            </div>
        </div>
    );
};

export default Venue