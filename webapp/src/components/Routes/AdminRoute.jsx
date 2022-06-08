import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import Cookies from "universal-cookie"

const AdminRoute = (props) => {
  const { children } = props
  // const cookies = new Cookies()
  // const token = cookies.get("userToken")

  // if (!token) {
  //   return <Navigate to="/" replace />
  // }

  return children
}

export default AdminRoute
