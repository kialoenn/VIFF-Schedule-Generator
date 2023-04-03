// Customized components import
import ScheduleBox from './ScheduleBox';
import background from '../../assets/icons/corner.png';

// CSS import
import '../../css/Dashboard.css';

// External import
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import React from 'react';



const Venue = (props) => {
    const convert = require('color-convert');
    const venueTextColor =  convert.rgb.hex(props.color.venueText.r, props.color.venueText.g, props.color.venueText.b);
    const venueBarColor = convert.rgb.hex(props.color.venueBar.r, props.color.venueBar.g, props.color.venueBar.b);
    const oddRowColor = convert.rgb.hex(props.color.oddRow.r, props.color.oddRow.g, props.color.oddRow.b);
    const evenRowColor = convert.rgb.hex(props.color.evenRow.r, props.color.evenRow.g, props.color.evenRow.b);
    const evenLine = props.grid['even'].width + 1 + "px " + props.grid['even'].type + " black";
    const oddLine = props.grid['odd'].width + 1 + "px " + props.grid['odd'].type + " black";

    console.log("grid:", evenLine);
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
            'position': 'relative',
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
            'backgroundColor': '#' + venueBarColor,
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
            'backgroundColor': '#' + oddRowColor,
            'width': '1.5625vw',
            'height': '100%',
            // 'borderRight': '2px dotted black',
            'borderRight': oddLine,
        },
    
        box2: {
            'backgroundColor': '#' + evenRowColor,
            'width': '1.5625vw',
            'height': '100%',
            // 'borderRight': '2px dotted black',
            'borderRight': oddLine,
        },
    
        box3: {
            'backgroundColor': '#' + oddRowColor,
            'width': '1.5625vw',
            'height': '100%',
            // 'borderRight': '4px dotted black',
            'borderRight': evenLine,
        },
    
        box4: {
            'backgroundColor': '#' + evenRowColor,
            'width': '1.5625vw',
            'height': '100%',
            // 'borderRight': '4px dotted black',
            'borderRight': evenLine,
        },
    
        text: {
            'margin': 'auto 0',
            'color': '#' + venueTextColor,
        },
        triangle: {
            'position': 'absolute',
            'left': '0',
            'bottom': '0',
            'width': '0',
            'height': '0',
            'borderRight': '35px solid #' + venueBarColor,
            'borderBottom': '35px solid black',
        }
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
    // console.log("venue",props.venueDetail.venueName, "id:", props.venueDetail.id);
    return (
        <View style={styles.venueRow}>
            <View style={styles.venue}>
                <Text style={styles.text}>{props.venueDetail.venueName}</Text>
                <View style={styles.triangle}></View>
            </View>
            <View style={styles.screen}>
                {createdScheduleBox(props.venueDetail.id)}
                {props.venueDetail.screens.map((screen, index) => {
                    return (
                        <ScheduleBox key={index} screen={screen} color={props.color}></ScheduleBox>
                    );
                })}

            </View>
        </View>
    );
};

export default Venue;
