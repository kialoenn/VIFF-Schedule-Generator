import React from 'react';

// MUI imports
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { useScheduleContext } from '../../../Context/ScheduleContext/ScheduleContext';

const FontSettings = () => {
    const scheduleContext = useScheduleContext();
    const handleChange = (id) => (setting) => {
        scheduleContext.setFont(setting.target.value, id);
    };
    return (
        <div>
            {/* Date Text Font Select */}
            <p>Date Text</p>
            <div>
                <FormControl sx={{ width: '65%', pr: 1 }} size="small">
                    <><InputLabel id="demo-simple-select-helper-label">Font</InputLabel><Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Font"
                        size="small"
                        defaultValue={'HelveticaBold'}
                        onChange={handleChange('dateText')}
                    >
                        <MenuItem value={'HelveticaBold'}>Helvetica</MenuItem>
                        <MenuItem value={'NeueHaas'}>NeueHaas</MenuItem>
                        <MenuItem value={'Calibri'}>Calibri</MenuItem>
                        <MenuItem value={'Arial'}>Arial</MenuItem>
                        <MenuItem value={'Garamond'}>Garamond</MenuItem>
                        <MenuItem value={'Geneva'}>Geneva</MenuItem>
                        <MenuItem value={'Verdana'}>Verdana</MenuItem>
                        <MenuItem value={'AvantGarde'}>AvantGarde</MenuItem>
                    </Select></>
                </FormControl>

                {/* Date Text Font Size Select */}
                <FormControl sx={{ width: '30%' }} size="small">
                    <><InputLabel id="demo-simple-select-helper-label">Size</InputLabel><Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Size"
                        size="small"
                        defaultValue={7}
                        onChange={handleChange('dateText')}
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
                    </Select></>
                </FormControl>
            </div>
            {/* Time Text Font Select    */}
            <p>Time Text</p>
            <div>
                <FormControl sx={{ width: '65%', pr: 1 }} size="small">
                    <><InputLabel id="demo-simple-select-helper-label">Font</InputLabel><Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Font"
                        size="small"
                        defaultValue={'HelveticaBold'}
                        onChange={handleChange('timeText')}
                    >
                        <MenuItem value={'HelveticaBold'}>Helvetica</MenuItem>
                        <MenuItem value={'NeueHaas'}>NeueHaas</MenuItem>
                        <MenuItem value={'Calibri'}>Calibri</MenuItem>
                        <MenuItem value={'Arial'}>Arial</MenuItem>
                        <MenuItem value={'Garamond'}>Garamond</MenuItem>
                        <MenuItem value={'Geneva'}>Geneva</MenuItem>
                        <MenuItem value={'Verdana'}>Verdana</MenuItem>
                        <MenuItem value={'AvantGarde'}>AvantGarde</MenuItem>
                    </Select></>
                </FormControl>

                {/* Time Text Font Size Select */}
                <FormControl sx={{ width: '30%' }} size="small">
                    <><InputLabel id="demo-simple-select-helper-label">Size</InputLabel><Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Size"
                        size="small"
                        defaultValue={7}
                        onChange={handleChange('timeText')}
                    >
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                    </Select></>
                </FormControl>
            </div>

            {/* Venue Text Font Select */}
            <p>Venue Text</p>
            <div>
                <FormControl sx={{ width: '65%', pr: 1 }} size="small">
                    <><InputLabel id="demo-simple-select-helper-label">Font</InputLabel><Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Font"
                        size="small"
                        defaultValue={'HelveticaBold'}
                        onChange={handleChange('venueText')}
                    >
                        <MenuItem value={'HelveticaBold'}>Helvetica</MenuItem>
                        <MenuItem value={'NeueHaas'}>NeueHaas</MenuItem>
                        <MenuItem value={'Calibri'}>Calibri</MenuItem>
                        <MenuItem value={'Arial'}>Arial</MenuItem>
                        <MenuItem value={'Garamond'}>Garamond</MenuItem>
                        <MenuItem value={'Geneva'}>Geneva</MenuItem>
                        <MenuItem value={'Verdana'}>Verdana</MenuItem>
                        <MenuItem value={'AvantGarde'}>AvantGarde</MenuItem>
                    </Select></>
                </FormControl>

                {/* Venue Text Font Size Select */}
                <FormControl sx={{ width: '30%' }} size="small">
                    <><InputLabel id="demo-simple-select-helper-label">Size</InputLabel><Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Size"
                        size="small"
                        defaultValue={7}
                        onChange={handleChange('venueText')}
                    >
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                    </Select></>
                </FormControl>
            </div>

            {/* Film Title Text Font Select */}
            <p>Film Title Text</p>
            <div>
                <FormControl sx={{ width: '65%', pr: 1 }} size="small">
                    <><InputLabel id="demo-simple-select-helper-label">Font</InputLabel><Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Font"
                        size="small"
                        defaultValue={'Helvetica'}
                        onChange={handleChange('filmTitleText')}
                    >
                        <MenuItem value={'Helvetica'}>Helvetica</MenuItem>
                        <MenuItem value={'NeueHaas'}>NeueHaas</MenuItem>
                        <MenuItem value={'Calibri'}>Calibri</MenuItem>
                        <MenuItem value={'Arial'}>Arial</MenuItem>
                        <MenuItem value={'Garamond'}>Garamond</MenuItem>
                        <MenuItem value={'Geneva'}>Geneva</MenuItem>
                        <MenuItem value={'Verdana'}>Verdana</MenuItem>
                        <MenuItem value={'AvantGarde'}>AvantGarde</MenuItem>
                    </Select></>
                </FormControl>

                {/* Film Title Text Font Size Select */}
                <FormControl sx={{ width: '30%' }} size="small">
                    <><InputLabel id="demo-simple-select-helper-label">Size</InputLabel><Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Size"
                        size="small"
                        defaultValue={4}
                        onChange={handleChange('filmTitleText')}
                    >
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                    </Select></>
                </FormControl>
            </div>

            {/* Film Details Text Font Select */}
            <p>Film Details Text</p>
            <div>
                <FormControl sx={{ width: '65%', pr: 1 }} size="small">
                    <><InputLabel id="demo-simple-select-helper-label">Font</InputLabel><Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Font"
                        size="small"
                        defaultValue={'Helvetica'}
                        onChange={handleChange('filmDetailsText')}
                    >
                        <MenuItem value={'Helvetica'}>Helvetica</MenuItem>
                        <MenuItem value={'NeueHaas'}>NeueHaas</MenuItem>
                        <MenuItem value={'Calibri'}>Calibri</MenuItem>
                        <MenuItem value={'Arial'}>Arial</MenuItem>
                        <MenuItem value={'Garamond'}>Garamond</MenuItem>
                        <MenuItem value={'Geneva'}>Geneva</MenuItem>
                        <MenuItem value={'Verdana'}>Verdana</MenuItem>
                        <MenuItem value={'AvantGarde'}>AvantGarde</MenuItem>
                    </Select></>
                </FormControl>

                {/* Film Details Text Font Size Select */}
                <FormControl sx={{ width: '30%' }} size="small">
                    <><InputLabel id="demo-simple-select-helper-label">Size</InputLabel><Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Size"
                        size="small"
                        defaultValue={3}
                        onChange={handleChange('filmDetailsText')}
                    >
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select></>
                </FormControl>
            </div>
        </div>
    );
};

export default FontSettings;
