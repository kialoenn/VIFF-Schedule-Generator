import '../../css/Dashboard.css';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import reactCSS from 'reactcss'

const ScheduleBox = (prop) => {
    
    let width;
    let startPoint;
    let color = "5px solid #da00b9";
    const screen = prop.screen;
    const startTime = screen.startTime;
    const duration = screen.duration;

    let now = new Date();
    now.setHours(startTime.substr(0, startTime.indexOf(":")));
    now.setMinutes(startTime.substr(startTime.indexOf(":") + 1));
    now.setSeconds(0);

    const oneDiv = 1/64;
    const hourBegin = 9;
    const boxNumInHour = 4;
    const boxMin = 15;

    // getting a start point
    let hour = startTime.substr(0, startTime.indexOf(":"));
    let min = startTime.substr(startTime.indexOf(":") + 1, startTime.indexOf(":") + 1);
    hour = parseInt(hour);
    hour -= hourBegin;
    hour *= boxNumInHour;
    min = parseInt(min);
    min /= boxMin;
    // startPoint = (hour + min - 1) / 64 * 100 * 0.85;
    startPoint = 1/64;
    startPoint += "vw";

    // getting a width

    hour = duration.substr(0, duration.indexOf(":"));
    min = duration.substr(duration.indexOf(":") + 1, duration.indexOf(":"));
    hour = parseFloat(hour) * boxNumInHour;
    min = parseFloat(min) / boxMin;
    let durationNum = hour + min;
    width = oneDiv * durationNum * 100 * 0.85;
    width = width + "vw";
    
    const ScreenBoxstyles = reactCSS({
        'default': {
            screenBox: {
                height: '100%',
                position: 'absolute',
                width: width,
                marginLeft: startPoint,
                backgroundColor: 'white',
                borderTop: '3px solid black',
                borderLeft: '3px dotted black',
                borderBottom: '3px solid black',
                borderRight: color,
            },
        },
    });
    return (
        <View style={ScreenBoxstyles.screenBox}>
            <Text>{screen.screenTitle}</Text>
            <Text>{screen.startTime} {screen.duration} </Text>
        </View>
        
    );
};

export default ScheduleBox;