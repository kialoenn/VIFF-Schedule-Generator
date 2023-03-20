import React from 'react';

// MUI imports
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const FontSettings = () => {
    return (
        <div>
          {/* Font Select */}
          <FormControl sx={{ width: '65%', pr: 1 }} size="small">
          <><InputLabel id="demo-simple-select-helper-label">Font</InputLabel><Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="Font"
                  size="small"
                  defaultValue={0}
              >
                  <MenuItem value={0}>Helvetica</MenuItem>
                  <MenuItem value={1}>NeueHaas</MenuItem>
                  <MenuItem value={2}>Calibri</MenuItem>
                  <MenuItem value={3}>Arial</MenuItem>
                  <MenuItem value={4}>Garamond</MenuItem>
                  <MenuItem value={5}>Geneva</MenuItem>
                  <MenuItem value={6}>Verdana</MenuItem>
                  <MenuItem value={1}>AvantGarde</MenuItem>
              </Select></>
      </FormControl>

      {/* Font Size Select */}
      <FormControl sx={{ width: '25%' }} size="small">
          <><InputLabel id="demo-simple-select-helper-label">Size</InputLabel><Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Size"
              size="small"
              defaultValue={7}
          >
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>11</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={13}>13</MenuItem>
              <MenuItem value={14}>14</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={16}>16</MenuItem>
              <MenuItem value={17}>17</MenuItem>
              <MenuItem value={18}>18</MenuItem>
              <MenuItem value={19}>19</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={21}>21</MenuItem>
              <MenuItem value={22}>22</MenuItem>
              <MenuItem value={23}>23</MenuItem>
              <MenuItem value={24}>24</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={26}>26</MenuItem>
              <MenuItem value={27}>27</MenuItem>
              <MenuItem value={29}>28</MenuItem>
              <MenuItem value={29}>29</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={31}>31</MenuItem>
              <MenuItem value={32}>32</MenuItem>
              <MenuItem value={33}>33</MenuItem>
          </Select></>
      </FormControl>
      </div>
    );
}

export default FontSettings;