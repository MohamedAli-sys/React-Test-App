import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './Core/routes';
import Navbar from './Core/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Suspense fallback="...loading">
          <Routes>
            {
              routes.map((route, idx) => {
                return route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    element={<route.component />}
                  />
                )
              })
            }
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
