import React, {Fragment} from 'react'
import Header from './components/header/Header'
import  Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <Fragment>
    <Header/>
    <Outlet/>
    <Footer />
    </Fragment>
  )
}

export default Layout