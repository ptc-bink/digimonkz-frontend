import React, { createContext } from 'react';
import './App.css';
import Main from './main';
import { AppContextProvider } from './Context/appContext';

const App = () => {
  return (
    <AppContextProvider>
      <div className="App">
        <Main />
      </div>
    </AppContextProvider>
  );
};

export default App;
