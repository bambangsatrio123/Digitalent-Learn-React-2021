import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TableContainer from './Component/TableContainer';

function App() {
  return (
    <BrowserRouter>
     <Switch>
       <Route path="/" component={TableContainer} />
     </Switch>
    </BrowserRouter>
  );
}

export default App;
