import { useState } from "react";
import { postLoginService } from "../../services/auth_services";
import { Link,useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    postLoginService(credentials).then((data) => {
      if (!data) {
        alert("Incorrect credentials");
        return;
      }

      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      navigate("/order");
    });
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-96 rounded-xl border p-5 flex flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="w-full">
            Username
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
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleInputChange}
            className="w-full"
          />
        </div>
        <button
          type="submit"
          className="px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900"
        >
          Ingresar
        </button>
      </form>
      <Link to="/register">Sign Up</Link>
    </div>
  );
};
