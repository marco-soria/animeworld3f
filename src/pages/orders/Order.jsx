import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../helpers/auth";
import {getUserProfile,getClientProfileByUserId} from '../../services/auth_services';
import { useState } from "react";
import { postNewOrder } from "../../services/order_services";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

export const Order = () => {
  const [newOrder,setNewOrder] = useState({})
  const [clientId,setClientId] = useState(0)
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [address,setAdress] = useState('')
  const [phone,setPhone] = useState('')
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const total = cart.reduce((acc, product) => acc + parseFloat(product.total), 0);


  const initialOptions = {
    clientId: "AVSq-R0xiwrlcdhnuIyjLwdhdlXolx-0ZpxnOODse8frfhVjewoRfE0s5QjEgNPcU-HS2kKJHyMoJM8B",
    currency: "USD",
    intent: "capture",
  };

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
        setClientId(data.id)
        setAdress(data.address);
        setPhone(data.phone);
      })
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    postNewOrder(clientId).then((data) => {
      if (!data) {
        alert("There was an error registering the order. Please try again.");
        return;
      }
      console.log("order registered : ",data)
      setNewOrder(data)
      alert("order registered!!!");
    });
  };

  const aproovePayment = () =>{
    alert("payment aprooved")
  }
  

  return(
    <>
    <h1 style={{ marginTop: '80px' }}>Confirm Order</h1>
    <form onSubmit={handleSubmit}>
        <h2>User Information</h2>
        First Name : <input type="text" name="firstName" value={firstName}/>
        Last Name: <input type="text" name="lastName" value={lastName}/>
        Email :<input type="text" name="email" value={email}/>
        <h2>Client Information</h2>
        Address : <input type="text" name="address" value={address}/>
        Phone : <input type="text" name="phone" value={phone}/>
        <button
          type="submit"
          className="px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900"
        >
          Register Order
        </button>
    </form>
    <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.length > 0 ? (
            cart.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>{product.total}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Empty Cart</td>
            </tr>
          )}
        </tbody>
      </table>
      <span>total : {total}</span><br/>
      {Object.keys(newOrder).length !== 0 && (
        <span>Order: {newOrder.code}</span>
      )}
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons 
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total,
                },
                invoice_number: newOrder.code // Pasar el número de factura
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(function(details) {
            console.log("Order Result : ",details)
            const invoiceNumber = details.purchase_units[0].invoice_number; // Obtener el número de factura
            alert('The Order was payed ' + invoiceNumber);
            // Manejar el número de factura según sea necesario
          });
        }}
        
        />
      </PayPalScriptProvider>
    </>
  )
};