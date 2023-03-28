import React from 'react';

import './App.css';
import Content from './Components/Display/Content';
import Sidebar from './Components/Display/Sidebar';
import ScheduleState from './Context/ScheduleContext/ScheduleState';


const App = () => {
    return (
        <ScheduleState>
            <div className='container'>
                <Sidebar />
                <div className='rightContainer'>
                    <div className='dashboard'>
                        <Content />
                    </div>
                </div>
            </div>
        </ScheduleState>
    );
};

export default App;
