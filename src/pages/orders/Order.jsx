import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../helpers/auth";
import {getUserProfile,getClientProfileByUserId} from '../../services/auth_services';
import { useState } from "react";

export const Order = () => {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [address,setAdress] = useState('')
  const [phone,setPhone] = useState('')

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  getUserProfile().then((data) => {
    if (data) {
      console.log(data);
      setFirstName(data.first_name)
      setLastName(data.last_name)
      setEmail(data.email)
      getClientProfileByUserId(data.id).then((data)=>{
        console.log(data)
        setAdress(data.address);
        setPhone(data.phone);
      })
    }
  });
  

  return(
    <>
    <h1>Confirmar Pedido</h1>
    <h2>Datos del Usuario</h2>
    <form>
        Nombre : <input type="text" name="firstName" value={firstName}/>
        Apellidos: <input type="text" name="lastName" value={lastName}/>
        Email :<input type="text" name="email" value={email}/>
    </form>
    <h2>Datos del Cliente</h2>
    <form>
        Dirección : <input type="text" name="address" value={address}/>
        Telefono : <input type="text" name="phone" value={phone}/>
    </form>

    </>
  )
};