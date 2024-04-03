import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../helpers/auth";
import {getUserProfile} from '../../services/auth_services';
import { useState } from "react";

export const Order = () => {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  //const [address,setAdress] = useState('')
  //const [phone,setPhone] = useState('')

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  getUserProfile().then((data) => {
    if (data) {
      console.log(data);
      setFirstName(data.first_name)
      setLastName(data.last_name)
      setEmail(data.email)
      
    }
  });
  

  return(
    <>
    <h1 style={{ marginTop: '80px' }}>Confirm Order</h1>
    <h2>User Information</h2>
    <form>
        First Name : <input type="text" name="firstName" value={firstName}/>
        Last Name: <input type="text" name="lastName" value={lastName}/>
        Email :<input type="text" name="email" value={email}/>
    </form>
    {/* <h2>Datos del Cliente</h2> */}
    <form>
        
    </form>

    </>
  )
};