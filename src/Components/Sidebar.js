import React from 'react';
import '../css/Sidebar.css';
import './ColorPicker';

import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import ColorPicker from './ColorPicker';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarItems'>
                <h3>Menu</h3>
                <p>Color Options</p>
                <p id="colorLabels">Date Bar</p>
                <div id='colorPicker'>
                <ColorPicker/>
                </div>
                <p id="colorLabels">Time Bar</p>
                <div id='colorPicker'> 
                <ColorPicker/>
                </div>
                <p id="colorLabels">Venue Bar</p>
                <div id='colorPicker'><ColorPicker/></div>
                <p id="colorLabels">Movie Block</p>
                <div id='colorPicker'><ColorPicker/></div>
                <p id="colorLabels">Date Text</p>
                <div id='colorPicker'><ColorPicker/> </div>
                <p id="colorLabels">Movie Text</p>
                <div id='colorPicker'><ColorPicker/> </div>
                <p id="colorLabels">Odd Row</p>
                <div id='colorPicker'><ColorPicker/> </div>
                <p id="colorLabels">Even Row</p>
                <div id='colorPicker'><ColorPicker/> </div>
                <p></p>
                <p id="fontLabel">Font Options</p>
                    {/* Font Select */}
                    <FormControl sx={{ width: "65%", pr: 1 }} size="small">
                        <InputLabel id="demo-simple-select-helper-label">Font</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Font"
                            size="small"
                            defaultValue={0}
                            //   value={age}
                            //   onChange={handleChange}
                            >
                            <MenuItem value={0}>Arial</MenuItem>
                            <MenuItem value={1}>Calibri</MenuItem>
                            <MenuItem value={2}>Comic Sans</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Font Size Select */}
                    <FormControl sx={{ width: "25%"}} size="small">
                        <InputLabel id="demo-simple-select-helper-label">Size</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Size"
                            size="small"
                            defaultValue={0}
                            //   value={age}
                            //   onChange={handleChange}
                            >
                            <MenuItem value={0}>7</MenuItem>
                            <MenuItem value={1}>8</MenuItem>
                            <MenuItem value={2}>9</MenuItem>
                        </Select>
                    </FormControl>

                <p>Line</p>
                    {/* Line Type Select */}
                    <FormControl sx={{ width: "65%", pr : 1 }} size="small">
                        <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Type"
                            size="small"
                            defaultValue={2}
                            //   value={age}
                            //   onChange={handleChange}
                            >
                            <MenuItem value={0}>Dashed</MenuItem>
                            <MenuItem value={1}>Dotted</MenuItem>
                            <MenuItem value={2}>Solid</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Line Width Select */}
                    <FormControl sx={{ width: "25%"}} size="small">
                        <InputLabel id="demo-simple-select-helper-label">Width</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Width"
                            size="small"
                            defaultValue={0}
                            //   value={age}
                            //   onChange={handleChange}
                            >
                            <MenuItem value={0}>1</MenuItem>
                            <MenuItem value={1}>2</MenuItem>
                            <MenuItem value={2}>3</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Checkbox to clear empty rows  */}
                    <FormGroup sx={{ pl: 0.2, pt: 0.5 }}>
                        <FormControlLabel control={<Checkbox />} label="Clear Empty Rows"/>
                    </FormGroup>
            </div>
        </div>
    );
};


export default Sidebar