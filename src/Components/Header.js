import React from 'react';
import '../App'
import Button from '@mui/material/Button'
import '../css/Header.css'

const Header = (props) => {

    const myfun = () => {
        // props.callback(data);
    }
    return (
        <div className='header'>
            <div className='header1'>
                {/* <Button variant="contained" component="label" onClick={loadData}>
                    Upload
                    <input hidden accept=".tab, .csv" multiple type="file" />
                </Button> */}
            </div>
            <div className='header2'></div>
            <div className='header3'></div>
            <div className='header4'></div>

        </div>
    );
};

export default Header