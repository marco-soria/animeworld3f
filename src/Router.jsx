import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
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
// import News from './components/pages/News';
// import Store from './components/pages/Store';
// import SignIn from './components/pages/SignIn';

const Router = () => {
  return (
    <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}> </Route>
          <Route path='/anime' element={<Anime></Anime>}> </Route>
          <Route path='/news' element={<News></News>}> </Route>
          <Route path='/store' element={<Store></Store>}> </Route>
          <Route path='/signin' element={<SignIn></SignIn>}> </Route>
          <Route path='/login' element={<Login></Login>}> </Route>
          <Route path='/orderdemo' element={<OrderDemo></OrderDemo>}> </Route>

            
            
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
  );
};

export default Router; 
