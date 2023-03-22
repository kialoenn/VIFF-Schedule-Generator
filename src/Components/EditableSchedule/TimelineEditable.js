import React from 'react';
import reactCSS from 'reactcss';
import '../../css/Schedule.css';
import { useScheduleContext } from '../../Context/ScheduleContext/ScheduleContext';


const TimelineEditable = (props) => {
    const scheduleContext = useScheduleContext();
    const colors = scheduleContext.colorSettings;
    console.log("timeline Editable props:", props);
    console.log("color setting:", colors);
    const styles = reactCSS({
        'default' : {

        }
    })
    return (
        <div className='timelineRow'>
            <button onClick={() => {
                console.log('set', props.id);
                scheduleContext.setDate(props.id);
            }}>Change</button>
            <div className='timelineDate'>{props.date}</div>
            <div className='timeline'>
                <div className='time'>9:00AM</div>
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
