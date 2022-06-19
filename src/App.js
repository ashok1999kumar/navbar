import { Route,Routes } from 'react-router-dom';
import './App.css';
import { Admin } from './Component/Pages/Admin';
import { ContactUs } from './Component/Pages/ContactUs';
import Home from './Component/Pages/Home';
import { Login } from './Component/Pages/Login';
import { Logout } from './Component/Pages/Logout';
import { Navgation } from './Component/Pages/Navgation';
import { Signup } from './Component/Pages/Signup';
function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/navgation' element={<Navgation/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
      </Routes>
    </>
  );
}

export default App;
