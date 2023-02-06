import React from 'react';
import Button from '@mui/material/Button'
import '../css/Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Button variant="contained" component="label">
            Upload
            <input hidden accept=".tab, .csv" multiple type="file" />
            </Button>
        </div>
    );
};

export default Header