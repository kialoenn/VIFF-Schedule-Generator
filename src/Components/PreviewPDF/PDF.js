// Customized components import
import Schedule from './Schedule';
import RobotoFont from '../../resources/fonts/Roboto-Regular.ttf';

// External import
import React from 'react';
import { Page, Document, Font } from '@react-pdf/renderer';

Font.register({
    family: 'Roboto', fonts: [
        { src: RobotoFont }, // font-style: normal, font-weight: normal
    ],
});

// Create Document Component
const MyDocument = (props) => (
    <Document>
        <Page size={2963}>
            {props.data.parsedScheduleContext.map((day, index) => {
                return (
                    <Schedule key={index} data={day}></Schedule>
                );
            })}
        </Page>
    </Document >
);

export default MyDocument;
