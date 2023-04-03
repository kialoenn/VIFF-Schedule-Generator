import React from 'react';
import '../../css/Schedule.css';
import { useScheduleContext } from '../../Context/ScheduleContext/ScheduleContext';


const TimelineEditable = (props) => {
    const convert = require('color-convert');
    const scheduleContext = useScheduleContext();
    const colors = scheduleContext.colorSettings;
    const fonts = scheduleContext.fontSettings;

    let dateText = colors["dateText"];
    dateText = `rgb(${dateText.r}, ${dateText.g}, ${dateText.b})`
    const dateStyle = {
        color: dateText,
        'fontSize': fonts["dateText"]["size"] +'pt',
        'fontFamily': fonts["dateText"]["font"], 
    }

    let dateBar = colors["dateBar"];
    const dateBarColorHex = convert.rgb.hex(dateBar.r, dateBar.g, dateBar.b);
    const dateBarColor = {
        'backgroundColor': '#' + dateBarColorHex, 
    }

    let timeText = colors["timeText"];
    const timeTextColorHex = convert.rgb.hex(timeText.r, timeText.g, timeText.b);
    const timeTextColor = {
        'color': '#' + timeTextColorHex, 
        'fontSize': fonts["timeText"]["size"] +'pt',
        'fontFamily': fonts["timeText"]["font"], 
    }

    return (
        <div className='timelineRow' style={dateBarColor}>
            {/* <button onClick={() => {
                console.log('set', props.id);
                scheduleContext.setDate(props.id);
            }}>Change</button> */}
            <div style={dateStyle} className='timelineDate' >{props.date}</div>
            <div className='timeline'style={timeTextColor}>
                <div className='time' >9:00AM</div>
                <div className='time'>10:00AM</div>
                <div className='time'>11:00AM</div>
                <div className='time'>12:00PM</div>
                <div className='time'>1:00PM</div>
                <div className='time'>2:00PM</div>
                <div className='time'>3:00PM</div>
                <div className='time'>4:00PM</div>
                <div className='time'>5:00PM</div>
                <div className='time'>6:00PM</div>
                <div className='time'>7:00PM</div>
                <div className='time'>8:00PM</div>
                <div className='time'>9:00PM</div>
                <div className='time'>10:00PM</div>
                <div className='time'>11:00PM</div>
                <div className='time'>12:00AM</div>
            </div>
        </div>
    );
};

export default TimelineEditable;
