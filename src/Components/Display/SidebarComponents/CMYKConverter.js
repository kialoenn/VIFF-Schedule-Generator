import React, { useState } from 'react';

// MUI imports
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';

// CSS import 
import '../../../css/Converter.css';

const CMYKConverter = () => {
    const [cValue, setCValue] = useState('');
    const [mValue, setMValue] = useState('');
    const [yValue, setYValue] = useState('');
    const [kValue, setKValue] = useState('');
    const [hexValue, setHexValue] = useState(' ');
    const [rValue, setRValue] = useState('');
    const [gValue, setGValue] = useState('');
    const [bValue, setBValue] = useState('');
    const convert = require('color-convert');
    const regex = /^[0-9\b]+$/;

    const convertToHex = (e) => {
        if (cValue != '' && mValue != '' && yValue != '' && kValue != '') {
            setHexValue(convert.cmyk.hex(Number(cValue), Number(mValue), Number(yValue), Number(kValue)));
            const rgbArray = convert.cmyk.rgb(Number(cValue), Number(mValue), Number(yValue), Number(kValue));
            setRValue(rgbArray[0]);
            setGValue(rgbArray[1]);
            setBValue(rgbArray[2]);
        }
    };
    
    return (
        <div>
         <div>
            <FormControl sx={{ m: 0.1, width: '24%', paddingBottom: 3 }} variant="outlined">
                <OutlinedInput
                    id="outlined-adornment-weight"
                    size="small"
                    autoComplete='off'
                    aria-describedby="outlined-weight-helper-text"
                    value={cValue}
                    onChange={(e) => {
                        if (regex.test(e.target.value) || e.target.value == '') {
                            setCValue(e.target.value);
                        }
                    } }
                    inputProps={{
                        'aria-label': 'weight',
                        'inputMode': 'numeric',
                        'pattern': '[0-9]*',
                        'maxLength': 3,
                    }} />
                <FormHelperText id="outlined-weight-helper-text">&nbsp;&nbsp;C</FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 0.1, width: '24%' }} variant="outlined">
                <OutlinedInput
                    id="outlined-adornment-weight"
                    size="small"
                    autoComplete='off'
                    aria-describedby="outlined-weight-helper-text"
                    value={mValue}
                    onChange={(e) => {
                        if (regex.test(e.target.value) || e.target.value == '') {
                            setMValue(e.target.value);
                        }
                    } }
                    inputProps={{
                        'aria-label': 'weight',
                        'inputMode': 'numeric',
                        'pattern': '[0-9]*',
                        'maxLength': 3,
                    }} />
                <FormHelperText id="outlined-weight-helper-text">&nbsp;&nbsp;M</FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 0.1, width: '24%' }} variant="outlined">
                <OutlinedInput
                    id="outlined-adornment-weight"
                    size="small"
                    autoComplete='off'
                    aria-describedby="outlined-weight-helper-text"
                    value={yValue}
                    onChange={(e) => {
                        if (regex.test(e.target.value) || e.target.value == '') {
                            setYValue(e.target.value);
                        }
                    } }
                    inputProps={{
                        'aria-label': 'weight',
                        'inputMode': 'numeric',
                        'pattern': '[0-9]*',
                        'maxLength': 3,
                    }} />
                <FormHelperText id="outlined-weight-helper-text">&nbsp;&nbsp;Y</FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 0.1, width: '24%' }} variant="outlined">
                <OutlinedInput
                    id="outlined-adornment-weight"
                    size="small"
                    autoComplete='off'
                    aria-describedby="outlined-weight-helper-text"
                    value={kValue}
                    onChange={(e) => {
                        if (regex.test(e.target.value) || e.target.value == '') {
                            setKValue(e.target.value);
                        }
                    } }
                    inputProps={{
                        'aria-label': 'weight',
                        'inputMode': 'numeric',
                        'pattern': '[0-9]*',
                        'maxLength': 3,
                    }} />
                <FormHelperText id="outlined-weight-helper-text">&nbsp;&nbsp;K</FormHelperText>
            </FormControl>
        </div><div>
                <TextField sx={{ width: '100%', paddingBottom: 3 }}
                    label="Hex"
                    value={hexValue}
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    InputProps={{
                        readOnly: true,
                    }} />
            </div><div>
                <FormControl sx={{ m: 0.1, width: '27%', pr: 1 }} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        size="small"
                        aria-describedby="outlined-weight-helper-text"
                        value={rValue}
                        inputProps={{
                            'aria-label': 'weight',
                            'inputMode': 'text',
                            'pattern': '[0-9]*',
                            'maxLength': 3,
                            'readOnly': true,
                        }} />
                    <FormHelperText id="outlined-weight-helper-text">&nbsp;&nbsp;&nbsp;R</FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 0.1, width: '27%', pr: 1 }} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        size="small"
                        aria-describedby="outlined-weight-helper-text"
                        value={gValue}
                        inputProps={{
                            'aria-label': 'weight',
                            'inputMode': 'text',
                            'pattern': '[0-9]*',
                            'maxLength': 3,
                            'readOnly': true,
                        }} />
                    <FormHelperText id="outlined-weight-helper-text">&nbsp;&nbsp;&nbsp;G</FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 0.1, width: '27%' }} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        size="small"
                        aria-describedby="outlined-weight-helper-text"
                        value={bValue}
                        inputProps={{
                            'aria-label': 'weight',
                            'inputMode': 'text',
                            'pattern': '[0-9]*',
                            'maxLength': 3,
                            'readOnly': true,
                        }} />
                    <FormHelperText id="outlined-weight-helper-text">&nbsp;&nbsp;&nbsp;B</FormHelperText>
                </FormControl>
            </div><div className="convert">
            <Button onClick={convertToHex} variant="text">Convert</Button></div>
        </div>
    )
};

export default CMYKConverter;