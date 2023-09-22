import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './Component/Header';
import Footer from "./Component/Footer";
import Dashboard from "./Pages/Dashboard"

function Main(): JSX.Element {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Dashboard} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default Main;
