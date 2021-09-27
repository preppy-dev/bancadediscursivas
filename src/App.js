import Home from "./screens/home/home";
import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Header from "./components/header/header";


function App() {
  return (
    <Suspense fallback={<div className="loading" />}>
    <Router>
      <Header/>
     <Home/>
    </Router>
    </Suspense>
  );
}

export default App;
