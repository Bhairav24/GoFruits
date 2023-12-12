
import './App.css';
import React from 'react'; 
import Home from './Screens/Home';

import MyOrder from './Screens/MyOrder';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Login from './Screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import SignUp from './Screens/SignUp';
import { CartProvider } from './components/ContextReducer';


function App() {
  return (
<CartProvider>

<Router>
    <div style={{ backgroundColor:"#fafafa" ,fontFamily:"Montserrat",letterSpacing:'0.8px' }}>  

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path='/login' element={<Login/>} />

        <Route exact path='/createuser' element={<SignUp/>} />
        <Route exact path='/myOrder' element={<MyOrder/>} />
        
      </Routes>
    </div>

    </Router>
    
 
</CartProvider>


);

 
}

export default App;
