import { render } from '@testing-library/react';
import React from 'react';
import reactCSS from 'reactcss'
import '../css/Schedule.css'

const Venue = (prop) => {
    // Get start time
    let startTime = prop.venueDetail.screens[0].startTime;
    let duration = prop.venueDetail.screens[0].duration;
    // console.log('Venue Name: ', prop.venueDetail.venueName);
    // console.log('Start time:', startTime, 'Duration:', duration);
    
    // Change the format of the time as js date, keep it just in case
    let now = new Date();
    now.setHours(startTime.substr(0, startTime.indexOf(":")));
    now.setMinutes(startTime.substr(startTime.indexOf(":") + 1));
    now.setSeconds(0);
    //

    const oneDiv = 0.95;
    let hour = startTime.substr(0, startTime.indexOf(":"));
    let min = startTime.substr(startTime.indexOf(":") + 1, startTime.indexOf(":") + 1);
    let startTimeNum = parseInt(hour + min);
    // console.log('strat time:', startTimeNum);
    let durationNum = parseInt(duration);
    durationNum /= 15;
    // console.log('duration: ', durationNum);
    let width = oneDiv * durationNum;
    width = width + "%";

    hour = parseFloat(hour);
    min = parseFloat(min);
    min /= 60;
    startTimeNum = hour + min;
    // console.log("start time num: ", startTimeNum);
    let startPoint = (startTimeNum - 9) * 4;
    // console.log('start Point: ', startPoint);
    startPoint *= oneDiv;
    if (startPoint < 0) {
        startPoint = 0;
    }
    startPoint += "%";
    // console.log("start point: ", startPoint);

    const styles = reactCSS({
        'default': {
            screenBox: {
                width: width,
                marginLeft: startPoint,
            },
        },
    });

    return (
        <div className='venueRow'>
            <div className='venue'>{prop.venueDetail.venueName}</div>
            <div className='screen'>
                <div className='screenBox' style={styles.screenBox}><div className='screenTitle'>{prop.venueDetail.screens[0].screenTitle}</div><br /><div className='screenInfo'>{startTime + " " + duration} p2</div></div>
                <div className='grid1' id="time1"></div>
                <div className='grid2' id="time2"></div>
                <div className='grid1'></div>
                <div className='grid1'></div>

                <div className='grid1'></div>
                <div className='grid2'></div>
                <div className='grid1'></div>
                <div className='grid1'></div>

                <div className='grid1'></div>
                <div className='grid2'></div>
                <div className='grid1'></div>
                <div className='grid1'></div>

                <div className='grid1'></div>
                <div className='grid2'></div>
                <div className='grid1'></div>
                <div className='grid1'></div>

                <div className='grid1'></div>
                <div className='grid2'></div>
                <div className='grid1'></div>
                <div className='grid1'></div>

                <div className='grid1'></div>
                <div className='grid2'></div>
                <div className='grid1'></div>
                <div className='grid1'></div>

                <div className='grid1'></div>
                <div className='grid2'></div>
                <div className='grid1'></div>
                <div className='grid1'></div>

                <div className='grid1'></div>
                <div className='grid2'></div>
                <div className='grid1'></div>
                <div className='grid1'></div>

                <div className='grid1'></div>
                <div className='grid2'></div>
                <div className='grid1'></div>
                <div className='grid1'></div>

                <div className='grid1'></div>
                <div className='grid2'></div>
                <div className='grid1'></div>
                <div className='grid1'></div>

                <div className='grid1'></div>
                <div className='grid2'></div>
                <div className='grid1'></div>
                <div className='grid1'></div>

                <div className='grid1'></div>
                <div className='grid2'></div>
                <div className='grid1'></div>
                <div className='grid1'></div>

                <div className='grid1'></div>
                <div className='grid2'></div>
                <div className='grid1'></div>
                <div className='grid1'></div>

                <div className='grid1'></div>
                <div className='grid2'></div>
                <div className='grid1'></div>
                <div className='grid1'></div>

                <div className='grid1'></div>
                <div className='grid2'></div>
                <div className='grid1'></div>
                <div className='grid1'></div>

                <div className='grid1'></div>
                <div className='grid2'></div>
                <div className='grid1'></div>
                <div className='grid1'></div>
                {/* {prop.venueDetail.screens.map((element, index) => {
                
                    return (
                        <div></div>
                    )
                })} */}
            </div>
        </div>
    );
};

export default Venue