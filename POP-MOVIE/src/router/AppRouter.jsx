import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import LogoPage from '../logo_page/LogoPage'
import HomePage from '../home_page/HomePage'

export const AppRouter = () => {
    return (
    <Routes>
        <Route path ='/logoPage' element={<LogoPage/>} />
        <Route path ='/home' element={<HomePage/>} />

        
//Navigate, me va  reedireccionar a la página uqe yo le indique si no existe el path
        <Route path ='/*' element={ <Navigate to="/LogoPage"/> } /> 

    </Routes>
    )
}
