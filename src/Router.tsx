import type { ReactNode } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { isAuthenticated } from "./helpers/auth";
import Anime from "./pages/anime";
import { AuthProvider } from "./pages/auth/AuthContext";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { Cart } from "./pages/cart/Cart";
import Home from "./pages/home";
import News from "./pages/news";
import { Order } from "./pages/orders/Order";
import SignIn from "./pages/signin";
import Store from "./pages/store";
import { Wishlist } from "./pages/wishlist/Wishlist";

interface PrivateWrapperProps {
  children: ReactNode;
}

const PrivateWrapper = ({ children }: PrivateWrapperProps) => {
  const location = useLocation();
  return isAuthenticated() ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location.pathname }} />
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/news" element={<News />} />
          <Route path="/store" element={<Store />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/register" element={<Register />} />

          <Route
            path="/order"
            element={
              <PrivateWrapper>
                <Order />
              </PrivateWrapper>
            }
          />
          <Route
            path="/wishlist"
            element={
              <PrivateWrapper>
                <Wishlist />
              </PrivateWrapper>
            }
          />
        </Routes>

        <Footer></Footer>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Router;
