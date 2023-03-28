// Customized components import
import Timeline from './Timeline';
import Venue from './Venue';

// External import
import React from 'react';
import { View } from '@react-pdf/renderer';

const Schedule = (props) => {
    return (
        <View>
            <Timeline date={props.data.date}></Timeline>
            {props.data.venue.map((venues, index) => {
                return (
                    <Venue key={index} venueDetail={venues}></Venue>
                );
            })}
        </View>
    );
};

export default Schedule;
