import React from 'react';

import './App.css';
import Content from './Components/Content';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';

const App = () => {
  const [loadedData, setLoadedData] = React.useState({});
  const myCallback = (data) => {
    setLoadedData(data);
  }
  return (
    <div className='container'>
      <Sidebar />
      <div className='rightContainer'>
      <div className='topMenu'>
      <Header callback={myCallback}/>
      </div>
      <div className='dashboard'>
      <Content data={loadedData}/>
      </div>
      </div>
    </div>
  );
};

export default App;