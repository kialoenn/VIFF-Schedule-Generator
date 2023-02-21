import React from 'react';

import './App.css';
import Content from './Components/Content';
import Sidebar from './Components/Sidebar';


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