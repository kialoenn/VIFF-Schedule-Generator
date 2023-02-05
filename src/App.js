import React from 'react';

import './App.css';
import Content from './Components/Content';
import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <div className='container'>
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;