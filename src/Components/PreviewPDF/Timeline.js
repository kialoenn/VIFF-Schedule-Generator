import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';


const Timeline = (props) => {
    const convert = require('color-convert');
    const dateTextColor = convert.rgb.hex(props.color.dateText.r, props.color.dateText.g, props.color.dateText.b);
    const dateBarColor = convert.rgb.hex(props.color.dateBar.r, props.color.dateBar.g, props.color.dateBar.b);
    const timeTextColor = convert.rgb.hex(props.color.timeText.r, props.color.timeText.g, props.color.timeText.b);
    const styles = StyleSheet.create({
        timelineRow: {
            'width': '100vw',
            'backgroundColor': '#' + dateBarColor,
            'height': '2.6vw',
            'flexDirection': 'row',
        },
    
        timelineDate: {
            'flex': '1.89',
            'textAlign': 'center',
            'margin': 'auto',
            'color': '#' + dateTextColor,
            'fontFamily': 'HelveticaBold',
            'fontWeight': '500',
            'fontSize': (props.font["dateText"]["size"] / 6.75) + 'vw',
        },
    
        timeline: {
            'flex': '8.11',
            'flexDirection': 'row',
            'fontSize': (props.font["timeText"]["size"] / 7) + 'vw',
            'fontFamily': 'HelveticaBold',
            'color': '#' + timeTextColor,
        },
    
        time: {
            'margin': 'auto',
            'width': '100vw',
            'textAlign': 'center',
        },
    
    });
    return (
        <View style={styles.timelineRow}>
            <View style={styles.timelineDate}>
                <Text>{props.date}</Text>
            </View>
            <View style={styles.timeline}>
                <Text style={styles.time}>9:00AM</Text>
                <Text style={styles.time}>10:00AM</Text>
                <Text style={styles.time}>11:00AM</Text>
                <Text style={styles.time}>12:00PM</Text>
                <Text style={styles.time}>1:00PM</Text>
                <Text style={styles.time}>2:00PM</Text>
                <Text style={styles.time}>3:00PM</Text>
                <Text style={styles.time}>4:00PM</Text>
                <Text style={styles.time}>5:00PM</Text>
                <Text style={styles.time}>6:00PM</Text>
                <Text style={styles.time}>7:00PM</Text>
                <Text style={styles.time}>8:00PM</Text>
                <Text style={styles.time}>9:00PM</Text>
                <Text style={styles.time}>10:00PM</Text>
                <Text style={styles.time}>11:00PM</Text>
                <Text style={styles.time}>12:00AM</Text>
            </View>
        </View>
    );
};

export default Timeline;
