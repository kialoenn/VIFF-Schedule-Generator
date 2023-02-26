import React from 'react';

import './App.css';
import Content from './Components/Display/Content';
import Sidebar from './Components/Display/Sidebar';


const App = () => {
    return (
        <div className='container'>
            <Sidebar />
            <div className='rightContainer'>
                <div className='dashboard'>
                    <Content />
                </div>
            </div>
        </div>
    );
};

export default App;
