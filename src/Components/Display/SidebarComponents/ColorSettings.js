import React, { useState } from 'react';

import ColorPicker from './ColorPicker';

const ColorSettings = () => {
    const [dateTextColor, setDateTextColor] = useState({r: 0, g: 0, b: 0, a: 0, id: ""});
    const [dateBarColor, setDateBarColor] = useState({r: 0, g: 0, b: 0, a: 0, id: ""});
    const [timeTextColor, setTimeTextColor] = useState({r: 0, g: 0, b: 0, a: 0, id: ""});
    const [venueTextColor, setVenueTextColor] = useState({r: 0, g: 0, b: 0, a: 0, id: ""});
    const [venueBarColor, setVenueBarColor] = useState({r: 0, g: 0, b: 0, a: 0, id: ""});
    const [filmTitleTextColor, setFilmTitleTextColor] = useState({r: 0, g: 0, b: 0, a: 0, id: ""});
    const [filmDetailsTextColor, setFilmDetailsTextColor] = useState({r: 0, g: 0, b: 0, a: 0, id: ""});
    const [filmBlockColor, setFilmBlockColor] = useState({r: 0, g: 0, b: 0, a: 0, id: ""});
    const [oddRowColor, setOddRowColor] = useState({r: 0, g: 0, b: 0, a: 0, id: ""});
    const [evenRowColor, setEvenRowColor] = useState({r: 0, g: 0, b: 0, a: 0, id: ""});
    const [backgroundColor, setBackgroundColor] = useState({r: 0, g: 0, b: 0, a: 0, id: ""});

    const handleCallBack = (childData, id) => {
        if (id == "Date Text") {
            setDateTextColor({
                r: childData.r,
                g: childData.g, 
                b: childData.b, 
                a: childData.a,
                id: id
            });
        } 
        else if (id == "Date Bar") {
            setDateBarColor({
                r: childData.r,
                g: childData.g, 
                b: childData.b, 
                a: childData.a,
                id: id
            });
        }
        else if (id == "Time Text") {
            setTimeTextColor({
                r: childData.r,
                g: childData.g, 
                b: childData.b, 
                a: childData.a,
                id: id
            });
        }
        else if (id == "Venue Text") {
            setVenueTextColor({
                r: childData.r,
                g: childData.g, 
                b: childData.b, 
                a: childData.a,
                id: id
            });
        }
        else if (id == "Venue Bar") {
            setVenueBarColor({
                r: childData.r,
                g: childData.g, 
                b: childData.b, 
                a: childData.a,
                id: id
            });
        }
        else if (id == "Film Title Text") {
            setFilmTitleTextColor({
                r: childData.r,
                g: childData.g, 
                b: childData.b, 
                a: childData.a,
                id: id
            });
        }
        else if (id == "Film Details Text") {
            setFilmDetailsTextColor({
                r: childData.r,
                g: childData.g, 
                b: childData.b, 
                a: childData.a,
                id: id
            });
        }
        else if (id == "Film Block") {
            setFilmBlockColor({
                r: childData.r,
                g: childData.g, 
                b: childData.b, 
                a: childData.a,
                id: id
            });
        }
        else if (id == "Odd Row") {
            setOddRowColor({
                r: childData.r,
                g: childData.g, 
                b: childData.b, 
                a: childData.a,
                id: id
            });
        }
        else if (id == "Even Row") {
            setEvenRowColor({
                r: childData.r,
                g: childData.g, 
                b: childData.b, 
                a: childData.a,
                id: id
            });
        }
        else if (id =="Background") {
            setBackgroundColor({
                r: childData.r,
                g: childData.g, 
                b: childData.b, 
                a: childData.a,
                id: id
            });
        } 
    }
    return (
        <div className="accordionItems">
        <p id="colorLabels">Date Text</p>
        <div id='colorPicker'><ColorPicker parentCallBack = {handleCallBack} id ={"Date Text"}></ColorPicker></div>
        <p id="colorLabels">Date Bar</p>
        <div id='colorPicker'><ColorPicker parentCallBack = {handleCallBack} id ={"Date Bar"}></ColorPicker></div>
        <p id="colorLabels">Time Text</p>
        <div id='colorPicker'><ColorPicker parentCallBack = {handleCallBack} id ={"Time Text"}></ColorPicker></div>
        <p id="colorLabels">Venue Text</p>
        <div id='colorPicker'><ColorPicker parentCallBack = {handleCallBack} id ={"Venue Text"}></ColorPicker></div>
        <p id="colorLabels">Venue Bar</p>
        <div id='colorPicker'><ColorPicker parentCallBack = {handleCallBack} id ={"Venue Bar"}></ColorPicker></div>
        <p id="colorLabels">Film Title Text</p>
        <div id='colorPicker'><ColorPicker parentCallBack = {handleCallBack} id ={"Film Title Text"}></ColorPicker> </div>
        <p id="colorLabels">Film Details Text</p>
        <div id='colorPicker'><ColorPicker parentCallBack = {handleCallBack} id ={"Film Details Text"}></ColorPicker> </div>
        <p id="colorLabels">Film Block</p>
        <div id='colorPicker'><ColorPicker parentCallBack = {handleCallBack} id ={"Film Block"}></ColorPicker></div>
        <p id="colorLabels">Odd Row</p>
        <div id='colorPicker'><ColorPicker parentCallBack = {handleCallBack} id ={"Odd Row"}></ColorPicker> </div>
        <p id="colorLabels">Even Row</p>
        <div id='colorPicker'><ColorPicker parentCallBack = {handleCallBack} id ={"Even Row"}></ColorPicker> </div>
        <p id="colorLabels">Background</p>
        <div id='colorPicker'><ColorPicker parentCallBack = {handleCallBack} id ={"Background"}></ColorPicker> </div>
    </div>
    )
}

export default ColorSettings;