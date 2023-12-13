// import React,{useState} from 'react'
// import { Link } from 'react-router-dom'
// import Navbar from '../components/Navbar';

// export default function SignUp() {

// const [credentials, setcredentials] = useState({name:"",email:"",password:"",location:""})


// const handleSubmit=async (e)=>{
//   e.preventDefault();
 
//   try{

// console.log(JSON.stringify({name:credentials.name,password:credentials.password,email:credentials.email,location:credentials.location}))

// const response = await fetch("http://localhost:5000/api/create",{
//   method:'POST',
//   headers:{
//     'Content-Type':'application/json'
   
//   },

//   body:JSON.stringify({name:credentials.name,password:credentials.password,email:credentials.email,location:credentials.location})
// });
// const json=await response.json() 

// console.log(json);
// if(!json.success){
//   alert("Enter Valid Credentials")
// }
// }
// catch(error){
  
//   alert("error creating user")
// }
// }

// const onChange=(event)=>{

//   setcredentials({...credentials,[event.target.name]:event.target.value})
  
// }


//   return (
//     <>
// <div>

//   <Navbar></Navbar>
// </div>
//     <div className='center-container'>
// <div className='cover-1 '>
// <div className="login-heading" style={{ textAlign: 'center', color: 'black' }}>
//             <h2>Sign Up</h2>
//           </div>
// <form onSubmit={handleSubmit}> 

// <div className="mb-3">
//     <label htmlFor="name" className="form-label" style={{color:'black'}}>Name</label>
//     <input type="text" className="form-control" name='name' value={credentials.name}  onChange={onChange}/>
    
//   </div>



//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label" style={{color:'black'}}>Email address</label>
//     <input type="email" className="form-control"  aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>


//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label" style={{color:'black'}}>Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange}/>
//   </div>

  
//   <div className="mb-3">
//     <label htmlFor="location" className="form-label" style={{color:'black'}}>Location</label>
//     <input type="text" className="form-control" name='location' value={credentials.location} onChange={onChange} />
//   </div>
  
//   <button type="submit" className="btn btn-primary" style={{color:'black'}}>  Submit  </button>

//   <Link to="/Login" className='btn m-3 btn-danger' style={{color:'black'}}>   Already a User  </Link>
// </form>



//     </div>
//     </div>


// </>
//   )
  
// }

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LocationSvg from '../images/location-24.png';
import bg from '../images/img.jpg'
export default function SignUp() {
  
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", location: "" });
  let navigate = useNavigate();
//  const BACKURL = process.env.CONNECT_TO_BACK_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(JSON.stringify({ name: credentials.name, password: credentials.password, email: credentials.email, location: credentials.location }));

      const response = await fetch("https://gofruits.onrender.com/api/create", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: credentials.name, password: credentials.password, email: credentials.email, location: credentials.location })
      });

      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert("Enter Valid Credentials");
      } else {
        // Save the auth token to local storage and navigate to the login page
        localStorage.setItem('token', json.authToken);
        navigate("/login");
      }
    } catch (error) {
      alert("Error while creating user");
    }
  }

  const handleGeolocationClick = async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude);

      const response = await fetch("https://gofruits.onrender.com/api/getlocation", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ latlong: { lat: latitude, long: longitude } })
      });

      const { location } = await response.json();
      console.log(location);

      setCredentials({ ...credentials, location });
    } catch (error) {
      console.error(error);
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='center-container' style={{backgroundImage: `url(${bg})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center'}} >
        <div className='cover-1'style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)',  borderRadius: '8px', // Optional: Add some border-radius to give a rounded look
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'}}>
          <div className="login-heading" style={{ textAlign: 'center'}}>
            <h2 style={{  color: 'black',fontWeight:'bold' }}>Sign Up</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label" style={{ color: 'black',fontWeight:'bold' }}>Name</label>
              <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: 'black',fontWeight:'bold' }}>Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} required/>
              <div id="emailHelp" className="form-text" style={{color:'black'}}>We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label" style={{ color: 'black',fontWeight:'bold' }} required>Location</label>
              <input type="text" className="form-control" name='location' value={credentials.location} onChange={onChange} />
            </div>


            <button type="button" onClick={handleGeolocationClick} className="btn btn-#fafafa" style={{color:'#2874f0',marginLeft:'-12px',
          justifyContent:'center',
            justifyItems:'center',marginTop:'-20px',fontWeight:'bold'}} > <img src={LocationSvg} alt="My Location" style={{ marginRight: '5px' }} />Current Location</button>



            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: 'black',marginTop:'8px',fontWeight:'bold' }}  required>Password</label>
              <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
            </div>
            <div className="d-flex justify-content-between mt-4">
            <button type="submit" className="btn " style={{backgroundColor:'#2bb24c',color:'white',fontWeight:'bold',letterSpacing:'1.5px',border:'1.5px solid black'}}>Submit</button>
            <Link to="/login" className="btn "style={{color:'red',fontWeight:'bold',}}>Already a user</Link>
            </div>
          </form>
        </div>
      </div>
      <div>

  <Footer/>
  </div>
    </>
  )
}
