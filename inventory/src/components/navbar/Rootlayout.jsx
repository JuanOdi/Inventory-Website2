import React from 'react'
import Header from './partials/Header';
import Footer from './partials/Footer';
import { Outlet } from 'react-router-dom';
const Rootlayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default Rootlayout