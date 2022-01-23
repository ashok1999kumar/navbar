import { Route,Routes } from 'react-router-dom';
import './App.css';
import { ContactUs } from './Component/Pages/ContactUs';
import { Login } from './Component/Pages/Login';
import { Navgation } from './Component/Pages/Navgation';
import { Signup } from './Component/Pages/Signup';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Navgation/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
      </Routes>
    </>
  );
}

export default App;
