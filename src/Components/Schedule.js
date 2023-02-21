import Timeline from './Timeline';
import Venue from './Venue';

import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { style } from '@mui/system';


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