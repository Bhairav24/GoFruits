
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// import Badge from 'react-bootstrap/Badge';
// import Model from '../Model';
// import Cart from '../Screens/Cart';
// import { useCart } from './ContextReducer';



// export default function Navbar() {


//   let data=useCart();
// const [cartView, setCartView]=useState(false)




//   const navigate = useNavigate();
  
//   const handleLogout = () => {
//     localStorage.removeItem('authToken');
//     navigate('/login');
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light ">
//         <div className="container-fluid">
//           <Link className="navbar-brand   " to="/"
          
//           style={{color:'black',fontFamily:"Montserrat",fontSize: 50,marginLeft: '40px',
//           fontWeight:'bold',textShadow: '1px 1px 3px #000'}} 
          
//           >
//             GoFruits
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//          style={{backgroundColor: "#2bb24c"}} >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav me-auto mb-2">
//               {/* <Link className="nav-item">
//                 <Link className="nav-link active fs-1 text-success"  aria-current="page" to="/">
//                   Home
//                 </Link>
//               </Link> */}
//               {localStorage.getItem('authToken') && (
//                 <Link className="nav-item">
//                   <Link className="btn active mt-2 mx-3 " style={{fontFamily:'Montserrat',backgroundColor: "#2bb24c",color:'white'}}aria-current="page" to="/myOrder">
//                     My Orders
//                   </Link>
//                 </Link>
//               )}
//             </ul>
//             {!localStorage.getItem('authToken') ? (
//               <div className="d-flex">
//                 <Link className="btn  mt-2 mx-2"style={{
//     backgroundColor: "white",
//     color: "#2bb24c",border: "2px solid #2bb24c"}} to="/login" id="nav-login-btn">
//                   Log In
//                 </Link>
//                 <Link className="btn mx-2 mt-2 " style={{
//     backgroundColor: "#2bb24c",
//     color: "white"}} to="/createuser" id="nav-signup-btn">
//                   Sign Up
//                 </Link>
//               </div>
//             ) : (
//               <div>
//                 <div className="btn  " style={{
//     backgroundColor: "#2bb24c",
//     color: "white",marginRight:'848px'}} onClick={()=>{setCartView(true)}}>My Cart {" "}
//                 <Badge pill bg="white" style={{
//           color:"red",fontFamily:'Montserrat'
//                 }}> {data.length}</Badge>
//                 </div>

// {cartView? <Model onClose={()=>setCartView(false)}><Cart></Cart></Model>:null}

//                 <button className="btn " style={{
//     backgroundColor: "#fafafa",
//     color: "red",fontSize:'15px',fontWeight:'bold'}}  onClick={handleLogout}>
//                   Log Out
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Model from '../Model';
import Cart from '../Screens/Cart';
import { useCart } from './ContextReducer';
import Dropdown from 'react-bootstrap/Dropdown';


export default function Navbar() {
  const data = useCart();
  const [cartView, setCartView] = useState(false);
 
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

 

  // Fetch the user's name from localStorage (replace "user name" with the actual field containing the user's name)
  const userName = localStorage.getItem('authEmail');

  // Ref to store the dropdown element
  

  // Close the dropdown when clicking outside of it
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Link
            className="navbar-brand   "
            to="/"
            style={{
              color: 'black',
              fontFamily: 'Montserrat',
              fontSize: 50,
              marginLeft: '40px',
              fontWeight: 'bold',
              textShadow: '1px 1px 3px #000'
            }}
          >
            GoFruits
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: '#2bb24c' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              {localStorage.getItem('authToken') && (
                <Link className="nav-item">
                  <Link
                    className="btn active mt-2 mx-3 "
                    style={{ fontFamily: 'Montserrat', backgroundColor: '#2bb24c', color: 'white' }}
                    aria-current="page"
                    to="/myOrder"
                  >
                    My Orders
                  </Link>
                </Link>
              )}
              {/* Place the "My Cart" button beside the "My Orders" button */}
              {localStorage.getItem('authToken') && (
                <Link className="nav-item">
                  <button
                    className="btn  mt-2 mx-3" style={{ backgroundColor: '#2bb24c', color: 'white' }}
                    onClick={() => setCartView(true)}
                  >
                    My Cart{' '}
                    <Badge pill bg="white" style={{ color: 'red', fontFamily: 'Montserrat' }}>
                      {' '}
                      {data.length}
                    </Badge>
                  </button>
                </Link>
              )}
            </ul>
            {!localStorage.getItem('authToken') ? (
              <div className="d-flex">
                <Link
                  className="btn  mt-2 mx-2"
                  style={{
                    backgroundColor: 'white',
                    color: '#2bb24c',
                    border: '2px solid #2bb24c'
                  }}
                  to="/login"
                  id="nav-login-btn"
                >
                  Log In
                </Link>
                <Link
                  className="btn mx-2 mt-2 "
                  style={{
                    backgroundColor: '#2bb24c',
                    color: 'white'
                  }}
                  to="/createuser"
                  id="nav-signup-btn"
                >
                  Sign Up
                </Link>
              </div>
            ) : 
              // <div>
              //   <div className="btn-group" ref={dropdownRef}>
              //     <button
              //       type="button"
              //       className="btn btn-success dropdown-toggle"
              //       onClick={toggleDropdown}
              //       aria-expanded={dropdownOpen}
                    
              //     >
               
              //  
                
              //     </button>
              //     <ul className={`dropdown-menu dropdown-menu-end${dropdownOpen ? ' show' : ''}`}>
                   
                    
              //       <Link className="dropdown-item" >
                    
              //           Log Out
                     
              //       </Link>
              //     </ul>
              //   </div>
              // </div>

             <Dropdown>
              <Dropdown.Toggle variant="white" id="dropdown-basic" style={{color:'black'}} >
             {userName}
              </Dropdown.Toggle>
        
              <Dropdown.Menu>
                <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
               
              </Dropdown.Menu>
              </Dropdown>
            }
          </div>
        </div>
      </nav>
      {cartView && <Model onClose={() => setCartView(false)}><Cart /></Model>}
    </div>
  );
}



// // import React from 'react'
// // import {Link,useNavigate} from 'react-router-dom';
// // export default function Navbar() 

// //  {
// //     const navigate = useNavigate();
// //     const handleLogout = () => {


// //         localStorage.removeItem('authToken');
// //         navigate('login')

// //     }
// //     return (
// //     <div >


// // <nav className="navbar navbar-expand-lg navbar-light bg-light">
// //   <div className="container-fluid">
// //     <Link className="navbar-brand fs-1 fst-italic" to="/">GoFruits</Link>
// //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
// //       <span className="navbar-toggler-icon"></span>
// //     </button>
// //     <div className="collapse navbar-collapse" id="navbarNav">
// //       <ul className="navbar-nav me-auto mb-2">
// //         <Link className="nav-item">
// //           <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
// //         </Link>
       
// //        {/* {(localStorage.getItem("authToken"))
// //        ?
// //         <Link className="nav-item">
// //         <Link className="nav-link active fs-5" aria-current="page" to="/">My Orders</Link>
        
// //       </Link>
// //       :""} */}
// //       {localStorage.getItem("authToken") && (
// //   <Link className="nav-item">
// //     <Link className="nav-link active fs-5" aria-current="page" to="/">
// //       My Orders
// //     </Link>
// //   </Link>
// // )}


       
// //       </ul>

// //       {(!localStorage.getItem("authToken")) ?
// //       <div className='d-flex'>

// //           <Link className="btn bg-white text-success mx-1" to="/login">Log In</Link>
          
// //           <Link className='btn bg-white text-success mx-1' to='/createuser'> Sign Up</Link>
        
// //           </div>
// //           :
// // <div>
// //           <div className='btn bg-whie text-success mx-2'> My Cart</div>
// //           <button className='btn bg-whie text-danger mx-2' onClick={handleLogout}> Log Out </button>

// //           </div>
// //           }
// //     </div>
// //   </div>
// // </nav>
// //         </div>
// //   )
// // }

