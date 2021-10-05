import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import UploadPage from './Pages/UploadPage';

function App() {
  return (
    <BrowserRouter>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/upload" component={UploadPage} />
     </Switch>
    </BrowserRouter>
  );
}

export default App;
