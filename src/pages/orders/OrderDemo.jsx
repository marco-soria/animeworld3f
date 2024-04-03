import React from 'react'
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../helpers/auth";

const OrderDemo = () => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return (
    <div style={{ marginTop: '80px' }}>
      <p>Hello World</p>
    </div>
  )
}

export default OrderDemo