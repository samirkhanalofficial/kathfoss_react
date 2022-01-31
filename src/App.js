import React from 'react';
import { BrowserRouter,HashRouter,Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import EditUser from './pages/EditUser';
import Example from './pages/Example';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

export default function App() {
  return <HashRouter>
    <Header/>
  <Routes>
    <Route path='/'  element={<Home/>}  />
    <Route path='/login'  element={<Login/>}  />
    <Route path='/example'  element={<Example/>}  />
    <Route path='/edit/:name/:email/:password'  element={<EditUser/>}  />
    <Route path='/register'  element={<SignUp/>}  />


  </Routes>
  </HashRouter>;
}
