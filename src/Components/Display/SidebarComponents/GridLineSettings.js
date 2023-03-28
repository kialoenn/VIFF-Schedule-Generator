import React from 'react';

// MUI imports
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import { useScheduleContext } from '../../../Context/ScheduleContext/ScheduleContext';

const GridLineSettings = () => {
    const scheduleContext = useScheduleContext();
    const handleChange = (setting) => {
        scheduleContext.setGridLine(setting.target.value);
    }
    return (
        <div>
          {/* Line Type Select */}
          <FormControl sx={{ width: '65%', pr: 1 }} size="small">
          <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
          <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Type"
              size="small"
              defaultValue={"Solid"}
              onChange={handleChange}
          >
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
              defaultValue={3}
              onChange={handleChange}
          >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
          </Select>
      </FormControl>
      </div>
    );
}

export default GridLineSettings;