import React from 'react';
import './App.css';
import {Box} from './components/Box'
import Title from './components/Titile'
function App() {
  return (
    <div className="App">
      <Title title='React App' />
      <Box name="Ahmad" age="22" >sdhfkdasedah</Box>
      <Box name="Nino" age="26" ></Box>
      <Box name='Zul' age="27" />

    </div>

  );
}

export default App;
