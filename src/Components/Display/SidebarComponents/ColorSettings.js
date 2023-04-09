/* eslint-disable max-len */
import React from 'react';
import { useState, useEffect } from 'react';
import defaultSettings from '../../../resources/colors_default.json';
import ColorPicker from './ColorPicker';
import { useScheduleContext } from '../../../Context/ScheduleContext/ScheduleContext';
import Button from '@mui/material/Button';

// const Button = ({ label, onClick }) => {
//     return (
//       <button onClick={onClick}>
//         {label}
//       </button>
//     );
//   };


const ColorSettings = () => {
    const colordatafromjson = defaultSettings;
    const scheduleContext = useScheduleContext();
    // const colors = scheduleContext.colorSettings;
    const [colors, setColors] = useState(scheduleContext.colorSettings);
    useEffect(() => {
        setColors(scheduleContext.colorSettings);
    }, [scheduleContext.colorSettings]);

    const handleCallBack = (childData, id) => {
        const colorData = { r: childData.r, g: childData.g, b: childData.b, a: childData.a, id: id };
        scheduleContext.setColor(colorData);
    };

    const handleClick = () => {
        console.log('hello');
        handleCallBack(colordatafromjson.dateBar, 'dateBar');
        handleCallBack(colordatafromjson.dateText, 'dateText');
        handleCallBack(colordatafromjson.timeText, 'timeText');
        handleCallBack(colordatafromjson.venueText, 'venueText');
        handleCallBack(colordatafromjson.venueBar, 'venueBar');
        handleCallBack(colordatafromjson.filmTitleText, 'filmTitleText');
        handleCallBack(colordatafromjson.filmDetailsText, 'filmDetailsText');
        handleCallBack(colordatafromjson.filmBlock, 'filmBlock');
        handleCallBack(colordatafromjson.oddRow, 'oddRow');
        handleCallBack(colordatafromjson.evenRow, 'evenRow');
    };

    return (
        <div className="accordionItems">
            <p id="colorLabels">Date Text</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={'dateText'} color={colors['dateText']} /></div>
            <p id="colorLabels">Date Bar</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={'dateBar'} color={colors['dateBar']} /></div>
            <p id="colorLabels">Time Text</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={'timeText'} color={colors['timeText']} /></div>
            <p id="colorLabels">Venue Text</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={'venueText'} color={colors['venueText']} /></div>
            <p id="colorLabels">Venue Bar</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={'venueBar'} color={colors['venueBar']} /></div>
            <p id="colorLabels">Film Title Text</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={'filmTitleText'} color={colors['filmTitleText']} /></div>
            <p id="colorLabels">Film Details Text</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={'filmDetailsText'} color={colors['filmDetailsText']} /></div>
            <p id="colorLabels">Film Block</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={'filmBlock'} color={colors['filmBlock']} /></div>
            <p id="colorLabels">Odd Row</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={'oddRow'} color={colors['oddRow']} /></div>
            <p id="colorLabels">Even Row</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={'evenRow'} color={colors['evenRow']} /></div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button onClick={handleClick} variant="outlined">Load default</Button>
            </div>
        </div>
    );
};

export default ColorSettings;
