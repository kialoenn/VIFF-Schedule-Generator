import React from 'react';
import '../css/Schedule.css'

const Header = (prop) => {
    return (
        <div className='header'>{prop.date}</div>
    );
};

export default Header