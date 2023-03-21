import React from 'react';

import ColorPicker from './ColorPicker';
import { useScheduleContext } from '../../../Context/ScheduleContext/ScheduleContext';

const ColorSettings = () => {
    const scheduleContext = useScheduleContext();

    const handleCallBack = (childData, id) => {
        let colorData = { r: childData.r, g: childData.g, b: childData.b, a: childData.a, id: id };
        scheduleContext.setColor(colorData);
    };
    return (
        <div className="accordionItems">
            <p id="colorLabels">Date Text</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={"dateText"} /></div>
            <p id="colorLabels">Date Bar</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={"dateBar"} /></div>
            <p id="colorLabels">Time Text</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={"timeText"} /></div>
            <p id="colorLabels">Venue Text</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={"venueText"} /></div>
            <p id="colorLabels">Venue Bar</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={"venueBar"} /></div>
            <p id="colorLabels">Film Title Text</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={"filmTitleText"} /></div>
            <p id="colorLabels">Film Details Text</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={"filmDetailsText"} /></div>
            <p id="colorLabels">Film Block</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={"filmBlock"} /></div>
            <p id="colorLabels">Odd Row</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={"oddRow"} /></div>
            <p id="colorLabels">Even Row</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={"evenRow"} /></div>
            <p id="colorLabels">Background</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={"backGround"} /></div>
        </div>
    )
}

export default ColorSettings;