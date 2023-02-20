import React from 'react';
import Timeline from './Timeline';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { style } from '@mui/system';
import Venue from './Venue';

const Schedule = (props) => {
    return (
        <View>
            <Timeline date={props.data.date}></Timeline>
            {props.data.venue.map((venues, index) => {
                return (
                    <Venue key={index} venueDetail={venues}></Venue>
                )
            })}
        </View>
    );
};

export default Schedule