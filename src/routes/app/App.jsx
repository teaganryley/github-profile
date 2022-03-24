import React from 'react';
import { Outlet } from 'react-router-dom';
// mui container?
// background paper

const App = () => (
  <div className="App">
    <main>
      <Outlet />
    </main>
  </div>
);

export default App;
