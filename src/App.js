import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import ContactUs from './Pages/ContactUs/ContactUs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Reviews from './Pages/Reviews/Reviews';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/about' element = {<About></About>}></Route>
        <Route path='/appointment' element = {<Appointment></Appointment>}></Route>
        <Route path='/login' element = {<Login></Login>}></Route>
        <Route path='/reviews' element = {<Reviews></Reviews>}></Route>
        <Route path='/contactUs' element = {<ContactUs></ContactUs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
