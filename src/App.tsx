import React, {lazy, Suspense} from 'react';

const Page2 = lazy(
  () => import('./Page2'),
);

const Page1 = lazy(
  () => import('./Page1'),
);

import './App.css';
import {Link, BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/page1">
          <button>page1</button>
        </Link>

        <Link to="/page2">
          <button>page2</button>
        </Link>

        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path="/page1" element={<Page1 />} />

            <Route path="/page2" element={<Page2 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
