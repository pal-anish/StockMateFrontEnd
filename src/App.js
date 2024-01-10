
import './App.css';
import Header2 from './Components/Header2/Header2';
import Footer from './Components/Footer/Footer';
import Header1 from './Components/Header1/Header1';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import OnBroadingpage from './Components/OnBroadingpage/OnBroadingpage';
import Userdetails from './Components/Userdetails/Userdetails';
import Userupdate from './Components/Userupdate/Userupdate';
import Homepage from './Components/Homepage/Homepage';
import Wishlist from './Components/Wishlist/Wishlist';
import About from './Components/About/About';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Protected from './Components/Server/Protected';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
           <Route exact path="" element={<OnBroadingpage />}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/register" element={<Register />}/>
           <Route path="/" element={<Protected/>}>
              <Route path="userdetails" element={<Userdetails/>}/>
              <Route path="userupdate" element={<Userupdate />}/>
              <Route path="search" element={<Homepage/>}/>
              <Route path="wishlist" element={<Wishlist/>}/>
              <Route path="about" element={<About/>}/>
           </Route>
           
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
