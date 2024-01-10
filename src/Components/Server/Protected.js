import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function Protected() {
  return (
    localStorage.getItem('token') ? 
        <Outlet/> : (
            // alert("You are not logged in..."),
            <Navigate to="/login"/>
        )
  )
}
