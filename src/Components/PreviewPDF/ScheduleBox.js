import '../../css/Dashboard.css';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import reactCSS from 'reactcss'

const ScheduleBox = (prop) => {
    
    let width;
    let startPoint;
    const screen = prop.screen;
    console.log("screen title: ", screen.screenTitle);
    console.log("startTime: ", screen.startTime);
    const startTime = screen.startTime;
    const duration = screen.duration;

    let now = new Date();
    now.setHours(startTime.substr(0, startTime.indexOf(":")));
    now.setMinutes(startTime.substr(startTime.indexOf(":") + 1));
    now.setSeconds(0);

    const oneDiv = 45;
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
    startPoint = (hour + min) * oneDiv;
    startPoint += "px";

    // getting a width
    // console.log('strat time:', startTimeNum);
    console.log("duration:", duration);
    hour = duration.substr(0, duration.indexOf(":"));
    min = duration.substr(duration.indexOf(":") + 1, duration.indexOf(":"));
    console.log("duration hour: ", hour);
    console.log("duration min: ", min);
    hour = parseFloat(hour) * boxNumInHour;
    min = parseFloat(min) / boxMin;
    let durationNum = hour + min;
    width = oneDiv * durationNum;

    width = width + "px";
    console.log('start Point: ', startPoint);

    
    const ScreenBoxstyles = reactCSS({
        'default': {
            screenBox: {
                height: '100%',
                position: 'absolute',
                width: width,
                marginLeft: startPoint,
                backgroundColor: 'white',
            },
        },
    });
    console.log("start point of", screen.screenTitle, ": ", startPoint);
    console.log("width : ", width);
    return (
        <View style={ScreenBoxstyles.screenBox}>
            <Text>{screen.screenTitle}</Text>
            <Text>{screen.startTime} {screen.duration} Cesária Évora</Text>
        </View>
        
    );
};

export default ScheduleBox;