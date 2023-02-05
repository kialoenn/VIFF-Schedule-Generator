import React from 'react';

import './App.css';
import Content from './Components/Content';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;