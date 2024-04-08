import React from 'react';
import { BrowserRouter, Route, Routes, Outlet, Navigate, useLocation} from 'react-router-dom'
import  { Header } from './components/header';
import { Footer } from './components/footer';
// import Home from './components/pages/Home';
import Anime from './pages/anime';
import Store from './pages/store';
import SignIn from './pages/signin';
import Home from './pages/home';
import News from './pages/news';
import { Login } from './pages/auth/Login';
import OrderDemo from './pages/orders/OrderDemo';
import { Cart } from './pages/cart/Cart';
import { Order } from './pages/orders/Order';
import { Register } from './pages/auth/Register';
// import News from './components/pages/News';
// import Store from './components/pages/Store';
// import SignIn from './components/pages/SignIn';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from './helpers/auth';
import { PrivateRoute } from './pages/auth/PrivateRoute';


const PrivateWrapper = ({ children }) => {
  const location = useLocation();
  return isAuthenticated() ? children : <Navigate to="/login" replace state={{ from: location.pathname }} />;
};


const Router = () => {
  
  

  return (
    <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/anime' element={<Anime/>}/> 
          <Route path='/news' element={<News/>}/> 
          <Route path='/store' element={<Store/>}/> 
          <Route path='/signin' element={<SignIn/>}/> 
          <Route path='/login' element={<Login/>}/> 
          
          <Route path='/cart' element={<Cart/>}/> 
          
          <Route path='/register' element={<Register/>}/> 

          <Route path='/order' element={<PrivateWrapper><Order/></PrivateWrapper>} />

            
            
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
  );
};

export default Router; 
