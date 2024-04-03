import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {postClientFullService} from "../../services/auth_services";

export const Register = () => {
  const navigate = useNavigate();
  const [client, setClient] = useState({
    username: "",
    password: "",
    first_name:"",
    last_name:"",
    email:"",
    phone:"",
    address:""
  });

  const handleInputChange = (e) => {
    setClient({
      ...client,
      [e.target.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    postClientFullService(client).then((data) => {
      if (!data) {
        alert("hubo un error");
        return;
      }
      navigate("/login");
    });
  };

  return (
    <div>
      <h1>Registar Nuevo Cliente</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-96 rounded-xl border p-5 flex flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="w-full">
            Usuario
          </label>
          <input
            id="username"
            type="text"
            name="username"
            onChange={handleInputChange}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="w-full">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleInputChange}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="w-full">
            Nombre
          </label>
          <input
            id="first_name"
            type="text"
            name="first_name"
            onChange={handleInputChange}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="w-full">
            Apellidos
          </label>
          <input
            id="last_name"
            type="text"
            name="last_name"
            onChange={handleInputChange}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="w-full">
            Email
          </label>
          <input
            id="email"
            type="text"
            name="email"
            onChange={handleInputChange}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="w-full">
            Telefono
          </label>
          <input
            id="phone"
            type="text"
            name="phone"
            onChange={handleInputChange}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="w-full">
            Dirección
          </label>
          <input
            id="address"
            type="text"
            name="address"
            onChange={handleInputChange}
            className="w-full"
          />
        </div>
        <button
          type="submit"
          className="px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900"
        >
          Registrar Nuevo Cliente
        </button>
      </form>
    </div>
  );
};