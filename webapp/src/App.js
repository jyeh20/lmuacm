import React from "react";

import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./Layout";

function App() {
  return (
    <Router forceRefresh={false}>
      <div className="App">
        <Layout />
      </div>
    </Router>
  );
}

export default App;
