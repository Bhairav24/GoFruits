// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import { useState } from 'react'
// import { Link ,useNavigate} from 'react-router-dom'

// export default function Login() {
//   const [credentials, setcredentials] = useState({email:"",password:""})
// let navigate=useNavigate()





// const handleSubmit=async (e)=>{
//   e.preventDefault();
 
  

// console.log(JSON.stringify({email:credentials.email,password:credentials.password}))

// const response = await fetch("http://localhost:5000/api/login",{
//   method:'POST',
//   headers:{
//     'Content-Type':'application/json',
//     'Accept': 'application/json'
//   },

//   body:JSON.stringify({email:credentials.email,password:credentials.password})
// });
// const json=await response.json() 

// console.log(json);
// if(!json.success){
//   alert("Enter Valid Credentials")
// }

// if(json.success){

//   localStorage.setItem('authToken','json.authToken');
//   console.log(json.authToken);
//   navigate("/");
// }
// }



// const onChange=(event)=>{

//   setcredentials({...credentials,[event.target.name]:event.target.value})
  
// }
//   return (

//     <>

// <div>
// <div className='container'>
// <form onSubmit={handleSubmit}> 




//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control"  aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>


//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange}/>
//   </div>

  
  
  
//   <button type="submit" className="btn btn-primary">  Submit  </button>

//   <Link to="/createuser" className='btn m-3 btn-danger'>   Don't have an Account?  </Link>
// </form>



//     </div>
//     </div>
//     </>
//   )
// }


import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bg from '../images/img.jpg'
import toast from "react-hot-toast";
export default function Login() {

 

  // const [popupStyle, showPopup]=useState("hide");

  // const popup=()=>{
  //     showPopup("login-popup")
  //     setTimeout(()=> showPopup("hide",3000))
  // }



  const [credentials, setCredentials] = useState({ email: '', password: '' });
  let navigate = useNavigate();
  //const BACKURL = process.env.CONNECT_TO_BACK_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(JSON.stringify({ email: credentials.email, password: credentials.password }));

    const response = await fetch("https://gofruits.onrender.com/api/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });
    const json = await response.json();

    console.log(json);
    if (!json.success) {
      alert('Enter Valid Credentials');
      
    }

    if (json.success) {
      localStorage.setItem('authEmail', credentials.email);
      localStorage.setItem('authToken', json.authToken);
      console.log(json.authToken);
      
        
      navigate('/');
      toast.success('Login successful!');

    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
 
  return (
    < >
 

<div >
  <Navbar/>
  </div>
  <div className="center-container d-flex justify-content-center align-items-center  vh-100"  
        
        style={{backgroundImage: `url(${bg})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center'}} 
      >
 
        <div className="cover p-4"  style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)', // Set the background color to transparent with opacity
            borderRadius: '8px', // Optional: Add some border-radius to give a rounded look
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', }}>
      
          <form onSubmit={handleSubmit}>
        
          <div className="login-heading" style={{textAlign: 'center',color:'black'}}>
            <h2 style={{textAlign: 'center',color:'black',fontWeight:'bold',fontSize:'35px'}}>LOG IN</h2>
          </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label" style={{color:'black',fontWeight:'bold'}}>
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                name="email"
                value={credentials.email}
                onChange={onChange}
              />
              <div id="emailHelp" className="form-text" style={{color:'black'}}>
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label" style={{color:'black',fontWeight:'bold'}}>
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={credentials.password}
                onChange={onChange}
              />
            </div>
            <div className="d-flex justify-content-between mt-4">
            <button type="submit" className="btn"  style={{backgroundColor:'#2bb24c',color:'white',fontWeight:'bold',letterSpacing:'1.5px',border:'1.5px solid black'}} >
              Submit
            </button>

            <Link to="/createuser" id="create-account" className="btn " style={{color:'red',fontWeight:'bold',marginLeft:'70px'}}>
              Create Account
            </Link>

            </div>
          </form>
        </div>
       
      </div>
     



      <div>

  <Footer/>
  </div>
  </>
   
  );
}
