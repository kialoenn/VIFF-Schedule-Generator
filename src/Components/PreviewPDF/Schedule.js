// Customized components import
import Timeline from './Timeline';
import Venue from './Venue';

// External import
import React from 'react';
import { View } from '@react-pdf/renderer';

const Schedule = (props) => {
    let v = props.data.venue;
    for (let i = 0; i < v.length; i++) {
        v[i].id = i;
    }

    return (
        <View>
            <Timeline date={props.data.date}></Timeline>
            {v.map((venues, index) => {
                return (
                    <Venue key={index} venueDetail={venues}></Venue>
                );
            })}
        </View>
    );
};

export default Schedule;
