import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { isAuthenticated } from "../../helpers/auth";
import {
  getClientProfileByUserId,
  getUserProfile,
} from "../../services/auth_services";
import { postNewOrder } from "../../services/order_services";
import "./Order.css";

interface CartProduct {
  id: number;
  name: string;
  price: string;
  quantity: number;
  total: string;
  image: string;
}

interface OrderResponse {
  id: number;
  code: string;
  client: number;
  total_price: string;
  discount: string;
  created_at: string;
}

interface ClientData {
  id: number;
  user: number;
  phone: string;
  address: string;
}

export const Order = () => {
  const [_newOrder, setNewOrder] = useState<OrderResponse | null>(null);

  const [clientId, setClientId] = useState<number>(0);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [cart, setCart] = useState<CartProduct[]>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );
  const total = cart.reduce(
    (acc, product) => acc + parseFloat(product.total),
    0
  );

  const initialOptions = {
    clientId:
      "AVSq-R0xiwrlcdhnuIyjLwdhdlXolx-0ZpxnOODse8frfhVjewoRfE0s5QjEgNPcU-HS2kKJHyMoJM8B",
    currency: "USD",
    intent: "capture",
  };

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  getUserProfile().then((data) => {
    if (data) {
      setFirstName(data.first_name);
      setLastName(data.last_name);
      setEmail(data.email);
      getClientProfileByUserId(data.id).then((clientData) => {
        if (clientData) {
          const typedClientData = clientData as unknown as ClientData;
          setClientId(typedClientData.id);
          setAddress(clientData.address);
          setPhone(clientData.phone);
        }
      });
    }
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    postNewOrder(clientId)
      .then((data) => {
        if (!data) {
          console.error("Error registering the order.");
          alert("There was an error registering the order. Please try again.");
          return;
        }
        console.log("Order registered:", data);
        setNewOrder(data);
        alert("Order registered!!!");
      })
      .catch((error) => {
        console.error("Error registering the order:", error);
        alert("There was an error registering the order. Please try again.");
      });
  };

  return (
    <>
      <div className="container">
        <h1 style={{ marginTop: "80px" }}>Order & Payment</h1>
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
                      <td>
                        <img
                          src={product.image}
                          style={{ height: "150px", width: "100px" }}
                          alt={product.name}
                        />
                      </td>
                      <td>{product.name}</td>
                      <td>{product.quantity}</td>
                      <td>{product.price}</td>
                      <td>{product.total}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center">
                      Empty Cart
                    </td>
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

        <div>
          <h2>Pay Checkout</h2>
          <div className="">
            <PayPalScriptProvider options={initialOptions}>
              <PayPalButtons
                style={{
                  disableMaxWidth: true,
                }}
                createOrder={(_data, actions) => {
                  return actions.order.create({
                    intent: "CAPTURE" as const,
                    purchase_units: [
                      {
                        amount: {
                          currency_code: "USD",
                          value: total.toString(),
                        },
                      },
                    ],
                  });
                }}
                onApprove={async (_data, actions) => {
                  await actions.order!.capture().then(async function (
                    details: any
                  ) {
                    console.log("Order details:", details);
                    alert(
                      `The Order ${details.id} was registered and payed. You will be redirected to the store.`
                    );

                    setCart([]);
                    localStorage.setItem("cart", JSON.stringify([]));

                    setTimeout(() => {
                      window.location.href = "/store";
                    }, 1000);
                  });
                }}
              />
            </PayPalScriptProvider>
          </div>
        </div>

        <Link to="/cart" className="mt-2 linkstorecart">
          {" "}
          Return to cart
        </Link>
      </div>
    </>
  );
};
