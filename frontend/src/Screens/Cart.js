// import React,{useState} from 'react'
// import { useDispatchCart,useCart } from '../components/ContextReducer';

// import trash from '/Users/hp/Documents/MCA/Sem4/Big proj/mernapp/src/images/trash.svg';
// import Notification from '../components/Notification';

// export default function Cart() {


//     let data=useCart();
//     let dispatch=useDispatchCart();

//     if(data.length===0){
//         return(
// <div>

//     <div className='m-5 w-100 text-center fs-3' style={{color:'black'}} >   The cart is Empty!</div>
// </div>


//         )
//     }
//     const [showNotification, setShowNotification] = useState(false);
// const handleCheckout=async()=>
// {
//     let userEmail=localStorage.getItem("authEmail");
//     let response=await fetch("http://localhost:5000/api/orderData",{
//     method:'POST',
//     headers: {
//         'Content-Type': 'application/json',
       
//       },
//       body:JSON.stringify({
//         order_data:data,
//         email:userEmail,
//         order_date:new Date().toDateString()
//       })
// }
// );
// console.log("Order Response",response)
// if(response.status===200)
// {
//     dispatch({type:"DROP"})
//     setShowNotification(true);
//     setTimeout(() => {
//         setShowNotification(false);
//       }, 1000000);
// }}




// let totalPrice=data.reduce((total,food)=> total+food.price,0)

//   return (
//     <div style={{backgroundColor:'#fafafa',  height: '700px', overflowY: 'auto'}}>
//          {showNotification && <Notification message="Payment Successful" />}
// <div className='container m-auto mt-5 ' >
//     <table className='table table-hover'>
//         <thead className='text-black fs-4'> 

//             <tr>
//                 <th scope='col'> #</th>
//                 <th scope='col'> Name</th>
//                 <th scope='col'> Quantity</th>
//                 <th scope='col'> Option</th>
//                 <th scope='col'> Amount</th>




//             </tr>


//         </thead>

//         <tbody >
//             {data.map((food,index)=>(
//                 <tr style={{color:'purple'}}>
//                     <th scope='row' > {index+1} </th>
//                     <td > {food.name.toUpperCase()}</td>
//                     <td > {food.qty}</td>
//                     <td> {food.size}</td>
//                     <td> {food.price}</td>
//                     <td><button type="button" className='btn p-0' ><img src={trash} alt='Trash Icon' onClick={()=>{dispatch({type:"REMOVE",index:index})}}/></button></td>
//                 </tr>

//             ))}



//         </tbody>
//     </table>

//     {<div><h1 className='fs-2'style={{color:'black'}}> Total Price: ₹{totalPrice} </h1></div>}

//     <div>
//         <button className='btn mt-1'onClick={handleCheckout} style={{backgroundColor:'#2874f0',color:'white'}}> Check Out</button>
//     </div>
// </div>


//     </div>
//   )
// }


// import React, { useState } from 'react';
// import { useDispatchCart, useCart } from '../components/ContextReducer';
// import trash from '/Users/hp/Documents/MCA/Sem4/Big proj/mernapp/src/images/trash.svg';
// import Notification from '../components/Notification';

// export default function Cart() {
//   let data = useCart();
//   let dispatch = useDispatchCart();
//   const [showNotification, setShowNotification] = useState(false);

//   if (data.length === 0) {
//     return (
//       <div>
//         <div className='m-5 w-100 text-center fs-3' style={{ color: 'black' }}>
//           The cart is Empty!
//         </div>
//       </div>
//     );
//   }

//   const handleCheckout = async () => {
//     let userEmail = localStorage.getItem('authEmail');
//     let response = await fetch('http://localhost:5000/api/orderData', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         order_data: data,
//         email: userEmail,
//         order_date: new Date().toDateString(),
//       }),
//     });

//     console.log('Order Response', response);
//     if (response.status === 200) {
//       setShowNotification(true);
//       setTimeout(() => {
//         setShowNotification(false);
//         dispatch({ type: 'DROP' }); // Clear the cart after the notification is displayed
//       }, 5000);
//     }
//   };

//   let totalPrice = data.reduce((total, food) => total + food.price, 0);

//   return (
//     <div style={{ backgroundColor: '#fafafa', height: '700px', overflowY: 'auto' }}>
//       {showNotification && (
//         <div
//           style={{
//             position: 'fixed',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             backgroundColor: '#2874f0',
//             color: 'white',
//             padding: '20px',
//             borderRadius: '10px',
//             zIndex: '9999',
//           }}
//         >
//           Payment Successful
//         </div>
//       )}
//       <div className='container m-auto mt-5 '>
//         <table className='table table-hover'>
//           <thead className='text-black fs-4'>
//             <tr>
//               <th scope='col'> #</th>
//               <th scope='col'> Name</th>
//               <th scope='col'> Quantity</th>
//               <th scope='col'> Option</th>
//               <th scope='col'> Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((food, index) => (
//               <tr style={{ color: 'purple' }} key={index}>
//                 <th scope='row'>{index + 1}</th>
//                 <td>{food.name.toUpperCase()}</td>
//                 <td>{food.qty}</td>
//                 <td>{food.size}</td>
//                 <td>{food.price}</td>
//                 <td>
//                   <button type='button' className='btn p-0'>
//                     <img
//                       src={trash}
//                       alt='Trash Icon'
//                       onClick={() => {
//                         dispatch({ type: 'REMOVE', index: index });
//                       }}
//                     />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div>
//           <h1 className='fs-2' style={{ color: 'black' }}>
//             Total Price: ₹{totalPrice}
//           </h1>
//         </div>
//         <div>
//           <button className='btn mt-1' onClick={handleCheckout} style={{ backgroundColor: '#2874f0', color: 'white' }}>
//             Check Out
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// // import React, { useState } from 'react';
// import { useDispatchCart, useCart } from '../components/ContextReducer';

// import trash from '/Users/hp/Documents/MCA/Sem4/Big proj/mernapp/src/images/trash.svg';
// import Notification from '../components/Notification';

// export default function Cart() {
//   let data = useCart();
//   let dispatch = useDispatchCart();
//   const [showNotification, setShowNotification] = useState(null);

//   if (data.length === 0) {
//     return (
//       <div>
//         <div className='m-5 w-100 text-center fs-3' style={{ color: 'black' }}>
//           The cart is Empty!
//         </div>
//       </div>
//     );
//   }

//   const handleCheckout = async () => {
//     let userEmail = localStorage.getItem('authEmail');
//     let response = await fetch('http://localhost:5000/api/mockPayment', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         order_data: data,
//         email: userEmail,
//         order_date: new Date().toDateString(),
//       }),
//     });

//     console.log('Payment Response', response);
//     if (response.status === 200) {
//       const paymentResponse = await response.json();
//       if (paymentResponse.success) {
//         setShowNotification({ type: 'success', message: 'Payment Successful' });
//         dispatch({ type: 'DROP' });
//       } else {
//         setShowNotification({ type: 'error', message: 'Payment Failed' });
//       }

//       setTimeout(() => {
//         setShowNotification(null);
//       }, 5000);
//     }
//   };

//   let totalPrice = data.reduce((total, food) => total + food.price, 0);

//   return (
//     <div style={{ backgroundColor: '#fafafa', height: '700px', overflowY: 'auto' }}>
//       {showNotification && (
//         <Notification
//           type={showNotification.type}
//           message={showNotification.message}
//         />
//       )}
//       <div className='container m-auto mt-5 '>
//         <table className='table table-hover'>
//           <thead className='text-black fs-4'>
//             <tr>
//               <th scope='col'> #</th>
//               <th scope='col'> Name</th>
//               <th scope='col'> Quantity</th>
//               <th scope='col'> Option</th>
//               <th scope='col'> Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((food, index) => (
//               <tr style={{ color: 'purple' }} key={index}>
//                 <th scope='row'>{index + 1}</th>
//                 <td>{food.name.toUpperCase()}</td>
//                 <td>{food.qty}</td>
//                 <td>{food.size}</td>
//                 <td>{food.price}</td>
//                 <td>
//                   <button
//                     type='button'
//                     className='btn p-0'
//                     onClick={() => {
//                       dispatch({ type: 'REMOVE', index: index });
//                     }}
//                   >
//                     <img src={trash} alt='Trash Icon' />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div>
//           <h1 className='fs-2' style={{ color: 'black' }}>
//             Total Price: ₹{totalPrice}
//           </h1>
//         </div>
//         <div>
//           <button
//             className='btn mt-1'
//             onClick={handleCheckout}
//             style={{ backgroundColor: '#2874f0', color: 'white' }}
//           >
//             Check Out
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from 'react';
// import { useDispatchCart, useCart } from '../components/ContextReducer';
// import trash from '/Users/hp/Documents/MCA/Sem4/Big proj/mernapp/src/images/trash.svg';
// import Notification from '../components/Notification';
// import PaymentOptionsModal from '../components/PaymentOptionsModal';

// export default function Cart() {
//   let data = useCart();
//   let dispatch = useDispatchCart();

//   const [showModal, setShowModal] = useState(false);
//   const [showNotification, setShowNotification] = useState(null);

//   if (data.length === 0) {
//     return (
//       <div>
//         <div className='m-5 w-100 text-center fs-3' style={{ color: 'black' }}>
//           The cart is Empty!
//         </div>
//       </div>
//     );
//   }

//   const handleCheckout = async () => {
//     let userEmail = localStorage.getItem('authEmail');
//     let response = await fetch('http://localhost:5000/api/orderData', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         order_data: data,
//         email: userEmail,
//         order_date: new Date().toDateString(),
//       }),
//     });

//     if (response.status === 200) {
//       dispatch({ type: 'DROP' });
//       setShowModal(true);
//     }
//   };

//   const handleCloseModal = (paymentStatus) => {
//     setShowModal(false);
//     setShowNotification({
//       type: paymentStatus === 'success' ? 'success' : 'error',
//       message: paymentStatus === 'success' ? 'Payment Successful !!' : 'Payment Failed',
//     });

//     setTimeout(() => {
//       setShowNotification(null);
//     }, 5000);
//   };

//   let totalPrice = data.reduce((total, food) => total + food.price, 0);

//   return (
//     <div style={{ backgroundColor: '#fafafa', height: '700px', overflowY: 'auto' }}>
//       {showNotification && (
//         <Notification type={showNotification.type} message={showNotification.message} />
//       )}
//       {showModal && <PaymentOptionsModal onClose={handleCloseModal} />}
//       <div className='container m-auto mt-5'>
//         <table className='table table-hover'>
//           <thead className='text-black fs-4'>
//             <tr>
//               <th scope='col'> #</th>
//               <th scope='col'> Name</th>
//               <th scope='col'> Quantity</th>
//               <th scope='col'> Option</th>
//               <th scope='col'> Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((food, index) => (
//               <tr style={{ color: 'purple' }} key={index}>
//                 <th scope='row'> {index + 1} </th>
//                 <td> {food.name.toUpperCase()}</td>
//                 <td> {food.qty}</td>
//                 <td> {food.size}</td>
//                 <td> {food.price}</td>
//                 <td>
//                   <button
//                     type='button'
//                     className='btn p-0'
//                     onClick={() => {
//                       dispatch({ type: 'REMOVE', index: index });
//                     }}
//                   >
//                     <img src={trash} alt='Trash Icon' />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div>
//           <h1 className='fs-2' style={{ color: 'black' }}>
//             {' '}
//             Total Price: ₹{totalPrice}{' '}
//           </h1>
//         </div>
//         <div>
//           <button
//             className='btn mt-1'
//             onClick={handleCheckout}
//             style={{ backgroundColor: '#2874f0', color: 'white' }}
//           >
//             Check Out
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { useDispatchCart, useCart } from '../components/ContextReducer';
import trash from '../images/trash.svg';
import Notification from '../components/Notification';
import PaymentOptionsModal from '../components/PaymentOptionsModal';

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();

  const [showNotification, setShowNotification] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  
  
   


  const handleCheckout = async () => {
    if (data.length === 0) {
      return;
    }
    else{ let userEmail = localStorage.getItem('authEmail');
    await fetch('http://localhost:5000/api/orderData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
      })
    }
   
    );}
    setShowPaymentModal(true);
  
  };
  

  const handlePaymentResult = (status) => {
    if (status === 'success') {
      dispatch({ type: 'DROP' });
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    // } else if (status === 'failure') {
    //   setShowNotification(true);
    //   setTimeout(() => {
    //     setShowNotification(false);
    //   }, 5000);
    }
    setShowPaymentModal(false);
  };

  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div style={{ backgroundColor: '#fafafa', height: '700px', overflowY: 'auto' }}>
  <Notification message="Payment Successful " show={showNotification} />
      {showPaymentModal && <PaymentOptionsModal onClose={handlePaymentResult} />}
      <div className="container m-auto mt-5">
        {data.length === 0 ? (
          <div className="m-5 w-100 text-center fs-3" style={{ color: 'black' }}>
            The cart is Empty!
          </div>
        ) : (
          <>
            <table className="table table-hover">
              <thead className="text-black fs-4">
                <tr>
                  <th scope="col"> #</th>
                  <th scope="col"> Name</th>
                  <th scope="col"> Quantity</th>
                  <th scope="col"> Option</th>
                  <th scope="col"> Amount</th>
                </tr>
              </thead>
              <tbody>
                {data.map((food, index) => (
                  <tr style={{ color: 'purple' }} key={index}>
                    <th scope="row"> {index + 1} </th>
                    <td> {food.name.toUpperCase()}</td>
                    <td> {food.qty}</td>
                    <td> {food.size}</td>
                    <td> {food.price}</td>
                    <td>
                      <button
                        type="button"
                        className="btn p-0"
                        onClick={() => {
                          dispatch({ type: 'REMOVE', index: index });
                        }}
                      >
                        <img src={trash} alt="Trash Icon" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <h1 className="fs-2" style={{ color: 'black' }}>
                Total Price: ₹{totalPrice}
              </h1>
            </div>
            <div>
              <button className="btn mt-1" onClick={handleCheckout}  style={{ backgroundColor: '#2874f0', color: 'white' }}>
                Check Out
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
