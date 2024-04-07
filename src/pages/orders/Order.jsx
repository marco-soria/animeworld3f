import { Link, Navigate } from "react-router-dom";
import { isAuthenticated } from "../../helpers/auth";
import {getUserProfile,getClientProfileByUserId} from '../../services/auth_services';
import { useState } from "react";
import { postNewOrder } from "../../services/order_services";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import "./Order.css";
import {Cart} from '../cart/Cart'

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
      // console.log(data);
      setFirstName(data.first_name)
      setLastName(data.last_name)
      setEmail(data.email)
      getClientProfileByUserId(data.id).then((data)=>{
        // console.log(data)
        setClientId(data.id)
        setAdress(data.address);
        setPhone(data.phone);
      })
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("Submitting order:", { clientId });
  
    postNewOrder(clientId).then((data) => {
      if (!data) {
        console.error("Error registering the order.");
        alert("There was an error registering the order. Please try again.");
        return;
      }
      console.log("Order registered:", data);
      setNewOrder(data);
      alert("Order registered!!!");
    }).catch((error) => {
      console.error("Error registering the order:", error);
      alert("There was an error registering the order. Please try again.");
    });
  };

  const handleOrderCreation = async () => {
    const userData = await getUserProfile();
    if (!userData) {
      console.error("Error getting user data.");
      alert("There was an error getting user data. Please try again.");
      return;
    }
  
    const clientData = await getClientProfileByUserId(userData.id);
    if (!clientData) {
      console.error("Error getting client data.");
      alert("There was an error getting client data. Please try again.");
      return;
    }
  
    const clientId = clientData.id;
    console.log("Submitting order:", { clientId });
  
    const data = await postNewOrder(clientId);
    if (!data) {
      console.error("Error registering the order.");
      alert("There was an error registering the order. Please try again.");
      return;
    }
    console.log("Order registered:", data);
    setNewOrder(data);
    alert("Order registered!!!");
  };
  

  return(
    <>
    <div className="container">
      <h1 style={{ marginTop: '80px' }}>Order & Payment</h1>
      <form onSubmit={handleSubmit} id="orderForm">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                {/* <button type="submit" className="btn btn-primary">Register Order</button> */}
              </form>
              <br />

      <h2>Cart Summary</h2>
      <div className="row">
        <div className="col">
          <table className="table table-bordered text-center align-middle">
            <thead>
              <tr className="tr-cartheader">
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.length > 0 ? (
                cart.map((product, index) => (
                  <tr className="tr-cartcontent" key={product.id}>
                    <td>{index + 1}</td>
                    <td><img src={product.image} style={{ height: "150px", width: "100px" }} alt={product.name} /></td>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
                    <td>{product.total}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">Empty Cart</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* <div className="col-md-3">
          <div className="card summary p-4 d-flex justify-content-center align-items-center">
            <p className="fs-4"> Total: USD {parseFloat(total).toFixed(2)}</p>
            
            
          </div>
        </div> */}
      </div>

        <div className="card ordersummary d-flex justify-content-center align-items-center fs-2">
          
        <p>Total: USD {total}</p>
        </div>
        <br/>
        {Object.keys(newOrder).length !== 0 && (
          <span>Order: {newOrder.code}</span>
        )}
        
        <br />

        <div>
          <h2>Pay Checkout</h2>
          <div className="">
          <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
              style = {{
                disableMaxWidth: true
              }}
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
              onApprove={async (data, actions) => {
                await actions.order.capture().then(async function(details) {
                  console.log("Order Result : ",details)
                  const invoiceNumber = details.purchase_units[0].invoice_number; // Obtener el número de factura
                  alert('The Order was payed ' + invoiceNumber);
                  // Manejar el número de factura según sea necesario

                  // Crear la orden
                  await handleOrderCreation();

                  // Vaciar el carrito
                  setCart([]);
                  localStorage.setItem("cart", JSON.stringify([]));

                  // Redirigir al usuario a la ruta /store
                  window.location.href = "/store";
                });
              }}
            />
          </PayPalScriptProvider>
        </div>
        </div>

        <Link to='/cart' className="mt-2 linkstorecart"> Return to cart</Link>
      </div>
    </>
  )
};

