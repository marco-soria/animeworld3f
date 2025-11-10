import type { ReactNode } from "react";
import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { isAuthenticated } from "./helpers/auth";
import { AuthProvider } from "./pages/auth/AuthContext";

const Home = lazy(() => import("./pages/home"));
const Anime = lazy(() => import("./pages/anime"));
const News = lazy(() => import("./pages/news"));
const Store = lazy(() => import("./pages/store"));
const SignIn = lazy(() => import("./pages/signin"));
const Login = lazy(() =>
  import("./pages/auth/Login").then((m) => ({ default: m.Login }))
);
const Register = lazy(() =>
  import("./pages/auth/Register").then((m) => ({ default: m.Register }))
);
const Cart = lazy(() =>
  import("./pages/cart/Cart").then((m) => ({ default: m.Cart }))
);
const Order = lazy(() =>
  import("./pages/orders/Order").then((m) => ({ default: m.Order }))
);
const Wishlist = lazy(() =>
  import("./pages/wishlist/Wishlist").then((m) => ({ default: m.Wishlist }))
);

interface PrivateWrapperProps {
  children: ReactNode;
}

const PrivateWrapper = ({ children }: PrivateWrapperProps) => {
  const location = useLocation();
  return isAuthenticated() ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" replace state={{ from: location.pathname }} />
  );
};

const LoadingFallback = () => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#030637",
    }}
  >
    <div className="spinner-border text-light" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

const RootLayout = () => {
  return (
    <AuthProvider>
      <Header />
      <main style={{ width: "100%", margin: 0, padding: 0 }}>
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </AuthProvider>
  );
};

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "anime", element: <Anime /> },
      { path: "news", element: <News /> },
      { path: "store", element: <Store /> },
      { path: "signin", element: <SignIn /> },
      { path: "login", element: <Login /> },
      { path: "cart", element: <Cart /> },
      { path: "register", element: <Register /> },
      {
        path: "order",
        element: (
          <PrivateWrapper>
            <Order />
          </PrivateWrapper>
        ),
      },
      {
        path: "wishlist",
        element: (
          <PrivateWrapper>
            <Wishlist />
          </PrivateWrapper>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
