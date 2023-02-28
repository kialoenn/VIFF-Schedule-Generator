// CSS import
import '../../css/Dashboard.css';

// External import
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
// import reactCSS from 'reactcss'

const styles = StyleSheet.create({
    venueRow: {
        'flexDirection': 'row',
        'margin': '0px auto',
        'width': '100vw',
        'height': '4vw',
        'backgroundColor': 'black',
        'color': 'white',
    },
    venue: {
        'width': '15%',
        'height': '4vw',
        'fontFamily': 'Roboto',
        'color': 'black',
        'fontSize': '1.4vw',
        'fontWeight': '700',
        'margin': 'auto',
        'paddingTop': '0.3vw',
        'paddingBottom': '0.3vw',
        'textAlign': 'center',
        'backgroundColor': '#a7a9ac',
        'borderRight': '2px solid black',
        'borderBottom': '2px solid black',
        'borderLeft': '2px solid black',
    },

    screen: {
        'color': 'black',
        'width': '85%',
        'backgroundColor': '#808080',
        'flexDirection': 'row',
        'fontSize': '0.7vw',

    },
});

const Venue = (props) => {
    // Get start time
    const startTime = props.venueDetail.screens[0].startTime;
    const duration = props.venueDetail.screens[0].duration;
    // console.log(props.venueDetail.screens[0].screenTitle);

    // // console.log('Venue Name: ', prop.venueDetail.venueName);
    // // console.log('Start time:', startTime, 'Duration:', duration);

    // // Change the format of the time as js date, keep it just in case
    // let now = new Date();
    // now.setHours(startTime.substr(0, startTime.indexOf(":")));
    // now.setMinutes(startTime.substr(startTime.indexOf(":") + 1));
    // now.setSeconds(0);
    // //

    // const oneDiv = 1;
    // let hour = startTime.substr(0, startTime.indexOf(":"));
    // let min = startTime.substr(startTime.indexOf(":") + 1, startTime.indexOf(":") + 1);
    // let startTimeNum = parseInt(hour + min);
    // // console.log('strat time:', startTimeNum);
    // let durationNum = parseInt(duration);
    // durationNum /= 15;
    // // console.log('duration: ', durationNum);
    // let width = oneDiv * durationNum;
    // width = width + "%";

    // hour = parseFloat(hour);
    // min = parseFloat(min);
    // min /= 60;
    // startTimeNum = hour + min;
    // // console.log("start time num: ", startTimeNum);
    // let startPoint = (startTimeNum - 9) * 4;
    // // console.log('start Point: ', startPoint);
    // startPoint *= oneDiv;
    // if (startPoint < 0) {
    //     startPoint = 0;
    // }
    // startPoint += "%";
    // // console.log("start point: ", startPoint);

    // const ScreenBoxstyles = reactCSS({
    //     'default': {
    //         screenBox: {
    //             width: width,
    //             marginLeft: startPoint,
    //             backgroundColor: 'white',
    //         },
    //     },
    // });

    return (
        <View style={styles.venueRow}>
            <View style={styles.venue}>
                <Text>{props.venueDetail.venueName}</Text>
            </View>
            <View style={styles.screen}>
                <View >
                    <Text>{props.venueDetail.screens[0].screenTitle}</Text>
                    <Text>{startTime} {duration} Cesária Évora</Text>
                </View>
            </View>
        </View>
    );
};

export default Venue;