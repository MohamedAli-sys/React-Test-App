import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './Core/routes';
import Navbar from './Core/Navbar/Navbar';
import Footer from './Core/Footer/Footer';
import ScrollToTop from './Core/ScrollToTop/ScrollToTop';

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
        <ScrollToTop />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
