/* eslint-disable prefer-const */
/* eslint-disable require-jsdoc */
import '../../css/Dashboard.css';
import '../../css/Schedule.css';

import React from 'react';
import reactCSS from 'reactcss';

// context import
import { useScheduleContext } from '../../Context/ScheduleContext/ScheduleContext';

const ScreenEditable = (prop) => {
    const convert = require('color-convert');
    const scheduleContext = useScheduleContext();
    const colors = scheduleContext.colorSettings;
    const fonts = scheduleContext.fontSettings;
    const filmBlock = colors['filmBlock'];
    const filmBlockColorHex = convert.rgb.hex(filmBlock.r, filmBlock.g, filmBlock.b);
    const filmTitleText = colors['filmTitleText'];
    const filmTitleTextColorHex = convert.rgb.hex(filmTitleText.r, filmTitleText.g, filmTitleText.b);
    const filmDetailsText = colors['filmDetailsText'];
    const filmDetailsTextColorHex = convert.rgb.hex(filmDetailsText.r, filmDetailsText.g, filmDetailsText.b);
    // console.log("schedule box rgb:", prop.screen.colour);
    // console.log("r:", prop.screen.colour.r);
    const r = prop.screen.colour.r;
    const g = prop.screen.colour.g;
    const b = prop.screen.colour.b;
    // console.log(`rgb values: ${r}, ${g}, ${b}`);
    let width;
    let w;
    let startPoint;
    const color = `2px solid rgb(${r}, ${g}, ${b})`;
    const screen = prop.screen;
    const startTime = screen.startTime;
    const duration = screen.duration;

    const now = new Date();
    now.setHours(startTime.substr(0, startTime.indexOf(':')));
    now.setMinutes(startTime.substr(startTime.indexOf(':') + 1));
    now.setSeconds(0);

    const oneDiv = 1 / 64;
    const hourBegin = 9;
    const boxNumInHour = 4;
    const boxMin = 15;

    // getting a start point
    let hour = startTime.substr(0, startTime.indexOf(':'));
    let min = startTime.substr(startTime.indexOf(':') + 1, startTime.indexOf(':') + 1);
    hour = parseInt(hour);
    hour -= hourBegin;
    hour *= boxNumInHour;
    min = parseInt(min);
    min /= boxMin;
    startPoint = (hour + min) / 64 * 100 * 0.608;
    startPoint += 'vw';

    // getting a width

    hour = duration.substr(0, duration.indexOf(':'));
    min = duration.substr(duration.indexOf(':') + 1, duration.indexOf(':'));
    hour = parseFloat(hour) * boxNumInHour;
    min = parseFloat(min) / boxMin;
    const durationNum = hour + min;
    width = oneDiv * durationNum * 100 * 0.607;
    w = width;
    width = width + 'vw';


    // function truncateText(text, maxLength) {
    //     if (text.length <= maxLength) {
    //       return text;
    //     } else {
    //     //   return text.substr(0, maxLength - 3) + "...";
    //       console.log("MaxLength: " + maxLength);
    //       return text.substr(0, maxLength) + "...";
    //     }
    //   }


    function truncateText(text, width) {
        // console.log("w: " + width);
        const fontSize = 0.5; // font size in em units
        const emToPx = parseFloat(getComputedStyle(document.body).fontSize);
        const maxWidth = width * 0.01 * window.innerWidth / emToPx;
        const textWidth = text.length * fontSize;
        if (textWidth > maxWidth) {
            const truncatedText = text.slice(0, Math.floor(maxWidth / fontSize));
            return truncatedText + '...';
        }
        return text;
    }


    // console.log(screen);
    // const truncatedText = truncateText(screen.screenTitle, width);
    const truncatedText = truncateText(screen.filmTitle, w);

    const ScreenBoxstyles = reactCSS({
        'default': {
            screenBox: {
                height: '3.1%',
                position: 'absolute',
                width: width,
                marginLeft: startPoint,
                backgroundColor: '#' + filmBlockColorHex,
                borderTop: '1px solid black',
                borderLeft: '1px dotted black',
                borderBottom: '1px solid black',
                justifyContent: 'center',
                alignItems: 'center',
                borderRight: color,
            },
            title: {
                height: '50%',
                fontSize: fonts['filmTitleText']['size'] * 1.7 + 'pt', // was 1.2em
                fontFamily: fonts['filmTitleText']['font'],
                margin: '0',
                color: '#' + filmTitleTextColorHex,
                padding: '10',
            },
            details: {
                color: '#' + filmDetailsTextColorHex,
                fontSize: fonts['filmDetailsText']['size'] * 1.7 + 'pt',
                fontFamily: fonts['filmDetailsText']['font'],
            },
        },
    });


    const movieStartTime = screen.startTime;
    const [shours, sminutes, sseconds] = movieStartTime.split(':').map(Number);

    const date = new Date();
    date.setHours(shours);
    date.setMinutes(sminutes);
    date.setSeconds(sseconds);

    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = date.toLocaleTimeString('en-US', options);


    const timeString = screen.duration;
    const [hours, minutes] = timeString.split(':').map(Number);
    const durationMinutes = hours * 60 + minutes;

    const setCustomID = () => {
        const id = { dateID: prop.dateID, venueID: prop.venueID, screenID: prop.screen.id };
        scheduleContext.setCustomID(id);
    };

    return (
        <div className='screenBox' style={ScreenBoxstyles.screenBox}>
            {/* <div style={ScreenBoxstyles.title}>{truncatedText}</div> */}
            <div style={{ height: '100%', cursor: 'pointer' }}
                onClick={() => setCustomID()}>
                <div style={ScreenBoxstyles.title}>{truncatedText}</div>
                {/* <Text numberOfLines={1}>THIS IS REALLY LONG TEXT FOR SHOW IN THE BOX.</Text>
             */}
                <div style={ScreenBoxstyles.details}>{formattedTime} {durationMinutes}min p{screen.pageLocation}</div>
            </div>
        </div>

    );
};

export default ScreenEditable;
