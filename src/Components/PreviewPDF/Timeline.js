import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    timelineRow: {
        'width': '100vw',
        'backgroundColor': '#231f20',
        'height': '3vw',
        'flexDirection': 'row',
    },

    timelineDate: {
        'flex': '1.89',
        'textAlign': 'center',
        'margin': 'auto',
        'color': '#ffa500',
        'fontWeight': '500',
        'fontSize': '1.3vw',
    },

    timeline: {
        'flex': '8.11',
        'flexDirection': 'row',
        'fontSize': '1vw',
        'color': 'white',
    },

    time: {
        'margin': 'auto',
        'width': '100vw',
        'textAlign': 'center',
    },

});

const Timeline = (props) => {
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
