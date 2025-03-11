import React from 'react'
import Banner from '../../components/ui/Banner'
import Tabs from '../../components/ui/Tabs'
import Accordion from '../../components/ui/Accordion'
import Dashboard from "../Authenticated/dashboard/dashboard.jsx";
import SignUp from '../../components/modal/signUp.jsx';
import CardModal from '../../components/modal/cardModal.jsx';
const HomePage = () => {
  return (
    <>
    <div className='container'>
      <Dashboard/>
    </div>
    </>
  )
}

export default HomePage