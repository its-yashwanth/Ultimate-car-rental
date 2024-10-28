import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route,createBrowserRouter,createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import Rent from './components/Rent';
import Contact from './components/Contact';
import Signup from './components/Signup';
import CarDetails from './components/CarDetails';
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='Rent/' element={<Rent/>}/>
    <Route path='Contact/' element={<Contact/>}/>
    <Route path='Contact/' element={<Contact/>}/>
    <Route path='Signup/' element={<Signup/>}/>
    <Route path='/car/:id' element={<CarDetails/>}/>
    </Route>
  )
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
