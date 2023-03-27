// Customized components import
import Schedule from './Schedule';

// Fonts import
import RobotoFont from '../../resources/fonts/Roboto-Regular.ttf';
import NeueHaasUnicaProBold from '../../resources/fonts/NeueHaasUnica/NeueHaasUnicaPro-Bold.otf';

// External import
import React from 'react';
import { Page, Document, Font } from '@react-pdf/renderer';

Font.register({
    family: 'Roboto', fonts: [
        { src: RobotoFont }, // font-style: normal, font-weight: normal
    ],
    family: 'NeueHaasUnicaProBold', fonts: [
        { src: NeueHaasUnicaProBold }, // font-style: normal, font-weight: normal
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
