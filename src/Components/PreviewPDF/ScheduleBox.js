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
    const hundred = 100;
    const hourBegin = 9;
    const boxNumInHour = 4;
    const boxMin = 15;
    let hour = startTime.substr(0, startTime.indexOf(":"));
    let min = startTime.substr(startTime.indexOf(":") + 1, startTime.indexOf(":") + 1);
    
    hour = parseInt(hour);
    hour -= hourBegin;
    hour *= boxNumInHour;
    console.log("start hour: ", hour);
    min = parseInt(min);
    min /= boxMin;
    console.log("start min: ", min);
    startPoint = (hour + min) * oneDiv;
    startPoint += "px";

    // console.log('strat time:', startTimeNum);
    console.log("duration:", duration);
    let durationNum = parseFloat(duration);
    console.log('duration num before multiply: ', durationNum);
    durationNum *= parseFloat(boxNumInHour);
    console.log('duration num after multiply: ', durationNum);
    width = oneDiv * durationNum;

    width = width + "px";
    // console.log("width: ", width);
    // hour = parseFloat(hour);
    // min = parseFloat(min);
    // let hourInMin = 60;
    // min /= hourInMin;
    // startTimeNum = hour + min;
    // console.log("start time num: ", startTimeNum);
    
    
    // startPoint = (startTimeNum - 4) * boxNumInHour;
    console.log('start Point: ', startPoint);
    // startPoint *= oneDiv;
    // if (startPoint < 0) {
    //     startPoint = 0;
    // }
    // startPoint += "%";
    
    const ScreenBoxstyles = reactCSS({
        'default': {
            screenBox: {
                // border: '3px solid',
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