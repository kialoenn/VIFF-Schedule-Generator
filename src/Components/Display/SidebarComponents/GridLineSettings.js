import React from 'react';

// MUI imports
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import { useScheduleContext } from '../../../Context/ScheduleContext/ScheduleContext';

const GridLineSettings = () => {
    const scheduleContext = useScheduleContext();
    
    const grid = scheduleContext.gridLineSettings;
    
    const oddType = grid["odd"].type;
    const oddWidth = grid["odd"].width;

    const evenType = grid["even"].type;
    const evenWidth = grid["even"].width;
    
    const handleChange = id => (setting) => {
        scheduleContext.setGridLine(setting.target.value, id);
    }
    return (
        <div>
            <div>
                <p>Odd</p>
                {/* Line Type Select */}
                <FormControl sx={{ width: '65%', pr: 1 }} size="small">
                                <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    label="Type"
                                    size="small"
                                    defaultValue={oddType}
                                    onChange={handleChange("odd")}>
                                    <MenuItem value={"Dashed"}>Dashed</MenuItem>
                                    <MenuItem value={"Dotted"}>Dotted</MenuItem>
                                    <MenuItem value={"Solid"}>Solid</MenuItem>
                                </Select>
                </FormControl>

                {/* Line Width Select */}
                <FormControl sx={{ width: '30%' }} size="small">
                    <InputLabel id="demo-simple-select-helper-label">Width</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Width"
                        size="small"
                        defaultValue={oddWidth}
                        onChange={handleChange("odd")}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <p>Even</p>
                {/* Line Type Select */}
                <FormControl sx={{ width: '65%', pr: 1 }} size="small">
                    <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Type"
                        size="small"
                        defaultValue={evenType}
                        onChange={handleChange("even")}>
                        <MenuItem value={"Dashed"}>Dashed</MenuItem>
                        <MenuItem value={"Dotted"}>Dotted</MenuItem>
                        <MenuItem value={"Solid"}>Solid</MenuItem>
                    </Select>
                </FormControl>

                {/* Line Width Select */}
                <FormControl sx={{ width: '30%' }} size="small">
                    <InputLabel id="demo-simple-select-helper-label">Width</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Width"
                        size="small"
                        defaultValue={evenWidth}
                        onChange={handleChange("even")}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                    </Select>
                </FormControl>
            </div>
      </div>
    );
}

export default GridLineSettings;