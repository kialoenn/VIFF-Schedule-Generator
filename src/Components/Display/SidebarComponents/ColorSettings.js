import React from 'react';

import ColorPicker from './ColorPicker';
import { useScheduleContext } from '../../../Context/ScheduleContext/ScheduleContext';

const ColorSettings = () => {
    const scheduleContext = useScheduleContext();

    const handleCallBack = (childData, id) => {
        let colorData = { r: childData.r, g: childData.g, b: childData.b, a: childData.a, id: id };
        console.log(colorData);
        scheduleContext.setColor(colorData);
    };
    return (
        <div className="accordionItems">
            <p id="colorLabels">Date Text</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={"Date Text"} /></div>
            <p id="colorLabels">Date Bar</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={"Date Bar"} /></div>
            <p id="colorLabels">Time Text</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={"Time Text"} /></div>
            <p id="colorLabels">Venue Text</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={"Venue Text"} /></div>
            <p id="colorLabels">Venue Bar</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={"Venue Bar"} /></div>
            <p id="colorLabels">Film Title Text</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={"Film Title Text"} /></div>
            <p id="colorLabels">Film Details Text</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={"Film Details Text"} /></div>
            <p id="colorLabels">Film Block</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={"Film Block"} /></div>
            <p id="colorLabels">Odd Row</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={"Odd Row"} /></div>
            <p id="colorLabels">Even Row</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={"Even Row"} /></div>
            <p id="colorLabels">Background</p>
            <div id='colorPicker'><ColorPicker parentCallBack={handleCallBack} id={"Background"} /></div>
        </div>
    )
}

export default ColorSettings;