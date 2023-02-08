import React from 'react';

import './App.css';
import Content from './Components/Content';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';

const App = () => {
  return (
    <div className='container'>
      <Sidebar />
      <div className='rightContainer'>
      {/* <div className='topMenu'>
      <Header />
      </div> */}
      <div className='dashboard'>
      <Content />
      </div>
      </div>
    </div>
  );
};

export default App;