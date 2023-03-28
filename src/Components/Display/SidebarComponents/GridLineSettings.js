import React from 'react';

// MUI imports
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

const GridLineSettings = () => {
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
      <FormControl sx={{ width: '30%' }} size="small">
          <InputLabel id="demo-simple-select-helper-label">Width</InputLabel>
          <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Width"
              size="small"
              defaultValue={3}
          //   value={age}
          //   onChange={handleChange}
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