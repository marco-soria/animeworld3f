import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../helpers/auth";

export const Protected = () => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return <h1>Ruta protegida</h1>;
};