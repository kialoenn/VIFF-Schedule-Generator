// Customized components import
import ScheduleBox from './ScheduleBox';
import background from '../../assets/icons/corner.png';

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
        'height': '2.362vw',
        'backgroundColor': 'black',
        'color': 'white',
    },
    venue: {
        'width': '18.9%',
        'height': '100%',
        'fontFamily': 'HelveticaBold',
        'color': 'black',
        'fontSize': '34pt',
        'fontWeight': '700',
        // 'margin': 'auto',
        'paddingTop': '0.3vw',
        'paddingBottom': '0.3vw',
        'textAlign': 'center',
        'backgroundColor': '#aaadb1',
        'borderRight': '2px solid black',
        'borderBottom': '2px solid black',
        'borderLeft': '2px solid black',
        'backgroundImage': `url(${background})`,
    },
    // #808080
    screen: {
        'color': 'black',
        'width': '81.1%',
        'backgroundColor': '#808080',
        'flexDirection': 'row',
        'fontSize': '0.7vw',

    },

    box1: {
        'backgroundColor': '#eaebec',
        'width': '1.5625vw',
        'height': '100%',
        'borderRight': '3px dotted black',
    },

    box2: {
        'backgroundColor': '#c9cccf',
        'width': '1.5625vw',
        'height': '100%',
        'borderRight': '3px dotted black',
    },

    box3: {
        'backgroundColor': '#eaebec',
        'width': '1.5625vw',
        'height': '100%',
        'borderRight': '5px dotted black',
    },

    box4: {
        'backgroundColor': '#c9cccf',
        'width': '1.5625vw',
        'height': '100%',
        'borderRight': '5px dotted black',
    },

    text: {
        'margin': 'auto 0',
    },
});
const createdScheduleBox = (id) => {
    const scheduleBoxNum = 64;
    const scheduleBoxes = [];
    // console.log("created schedule boxes!");
    for (let i = 0; i < scheduleBoxNum; i++) {
        if (id % 2 == 0) {
            if (i % 2 == 0) {
                scheduleBoxes.push(<View style={styles.box1} key={i}></View>);
            } else {
                scheduleBoxes.push(<View style={styles.box3} key={i}></View>);
            }
            
        } else if (id % 2 == 1) {
            if (i % 2 == 0) {
                scheduleBoxes.push(<View style={styles.box2} key={i}></View>);
            } else {
                scheduleBoxes.push(<View style={styles.box4} key={i}></View>);
            }
        }
        // } else if (i % 4 == 2) {
        //     scheduleBoxes.push(<View style={styles.box3} key={i}></View>);
        // } else {
        //     scheduleBoxes.push(<View style={styles.box4} key={i}></View>);
        // }

    }
    return scheduleBoxes;
}

const Venue = (props) => {
    //
    // console.log("venue",props.venueDetail.venueName, "id:", props.venueDetail.id);
    return (
        <View style={styles.venueRow}>
            <View style={styles.venue}>
                <Text style={styles.text}>{props.venueDetail.venueName}</Text>
            </View>
            <View style={styles.screen}>
                {createdScheduleBox(props.venueDetail.id)}
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
