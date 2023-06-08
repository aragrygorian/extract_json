import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '@components/Home';

import style from './App.scss';

export const App = (): JSX.Element => (
  <div className={style.container}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </div>
);
