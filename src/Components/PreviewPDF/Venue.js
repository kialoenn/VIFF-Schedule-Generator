// Customized components import
import ScheduleBox from './ScheduleBox';

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
    // #808080
    screen: {
        'color': 'black',
        'width': '85%',
        'backgroundColor': '#808080',
        'flexDirection': 'row',
        'fontSize': '0.7vw',

    },

    box1: {
        'backgroundColor': '#808080',
        'width': '1.5625vw',
        'height': '100%',
        'borderRight': '3px dotted black',
    },

    box2: {
        'backgroundColor': '#2e291d',
        'width': '1.5625vw',
        'height': '100%',
        'borderRight': '5px dotted black',
    }
});
const createdScheduleBox = ()=> {
    const scheduleBoxNum = 64;
    const scheduleBoxes = [];
    console.log("created schedule boxes!");
    for (let i =0; i < scheduleBoxNum; i++) {
        if (i % 2 == 0) {
            scheduleBoxes.push(<View style={styles.box1} key={i}></View>);
        } else {
            scheduleBoxes.push(<View style={styles.box2} key={i}></View>)
        }
        
    }
    return scheduleBoxes;
}

const Venue = (props) => {
    return (
        <View style={styles.venueRow}>
            <View style={styles.venue}>
                <Text>{props.venueDetail.venueName}</Text>
            </View>
            <View style={styles.screen}>
                {createdScheduleBox()}
                {props.venueDetail.screens.map((screen, index) => {
                    return (
                    <ScheduleBox key={index} screen={screen}></ScheduleBox>
                    );
                })}
                
            </View>
        </View>
    );
};

export default Venue;
