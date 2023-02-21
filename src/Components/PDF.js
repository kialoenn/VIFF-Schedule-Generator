import Schedule from './Schedule';
import Timeline from './Timeline';
import RobotoFont from '../resources/fonts/Roboto-Regular.ttf'

import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';


// Create styles
const styles = StyleSheet.create({

});

Font.register({
    family: 'Roboto', fonts: [
        { src: RobotoFont }, // font-style: normal, font-weight: normal
    ]
});


// Create Document Component
const MyDocument = (props) => (
    <Document>

        <Page size="2A0" >
            {props.data.scheduleDetail.map((day, index) => {
                return (
                    <Schedule key={index} data={day}></Schedule>
                )
            })}
        </Page>
    </Document>
);

export default MyDocument;