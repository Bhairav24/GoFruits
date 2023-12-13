// import React ,{useEffect, useState}from 'react'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'

// export default function MyOrder() {

//     const [orderData,setOrderData]=useState("");
//     const fetchMyOrder=async()=>{
//         console.log(localStorage.getItem("authEmail"))

//         await fetch("http://localhost:5000/api/myOrderData",{
//             method:'POST',
//             headers:{
//                 'Content-type':'application/json'
//             },
//             body:JSON.stringify({
//                 email: localStorage.getItem('authEmail')
//             })
//         }).then(async(res)=>{
//             let response=await res.json()
//             await setOrderData(response)
//         })
//     }

//     useEffect(()=>{
//         fetchMyOrder()
//     },[])
//     return (
//         <>
//           <div>
//             <Navbar />
//           </div>
//           <div className="container" style={{ color: 'white' }}>
//             {orderData !== {} ? (
//               Array(orderData).map((data) => {
//                 return data.orderData
//                   ? data.orderData.order_data
//                       .slice(0)
//                       .reverse()
//                       .map((item, index) => {
//                         return (
//                           <div key={index}>
//                             {item.map((arrayData) => {
//                               if (arrayData.Order_date) {
//                                 return (
//                                   <div
//                                     key={arrayData.Order_date}
//                                     style={{
//                                       color: 'black',
//                                       fontSize: '30px',
//                                       fontWeight: 'bold',
//                                     }}
//                                   >
//                                     {arrayData.Order_date}
//                                   </div>
//                                 );
//                               } else {
//                                 return (
//                                   <div className="row justify-content-start">
//                                     <div
//                                       className="card mt-3 mx-2"
//                                       style={{
//                                         width: '16rem',
//                                         maxHeight: '400px',
//                                       }}
//                                     >
//                                       <img
//                                         src={arrayData.img}
//                                         className="card-img-top"
//                                         alt="..."
//                                         style={{
//                                           height: '120px',
//                                           objectFit: 'fill',
//                                         }}
//                                       />
//                                       <div className="card-body">
//                                         <h5 className="card-title">
//                                           {arrayData.name.toUpperCase()}
//                                         </h5>
//                                         <div
//                                           className="container w-100 p-0"
//                                           style={{ height: '38px' }}
//                                         >
//                                           <span className="m-1">
//                                             {arrayData.qty}
//                                           </span>
//                                           <span className="m-1">
//                                             {arrayData.size}
//                                           </span>
//                                           <span className="m-1">
//                                             {arrayData.Order_date}
//                                           </span>
//                                           <div className="d-inline ms-2 h-100 w-20 fs-5">
//                                             ₹{arrayData.price}/-
//                                           </div>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 );
//                               }
//                             })}
//                           </div>
//                         );
//                       })
//                   : '';
//               })
//             ) : (
//               ''
//             )}
//           </div>
//           <div>
//             <Footer />
//           </div>
//         </>
//       );
//     }

// import React, { useEffect, useState } from 'react';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// export default function MyOrder() {
//   const [orderData, setOrderData] = useState('');

//   const fetchMyOrder = async () => {
//     console.log(localStorage.getItem('authEmail'));

//     await fetch('http://localhost:5000/api/myOrderData', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify({
//         email: localStorage.getItem('authEmail'),
//       }),
//     }).then(async (res) => {
//       let response = await res.json();
//       await setOrderData(response);
//     });
//   };

//   useEffect(() => {
//     fetchMyOrder();
//   }, []);

//   return (
//     <>
//       <div>
//         <Navbar />
//       </div>
//       <div className="container" style={{ color: 'white' }}>
//         {orderData !== {} ? (
//           Array(orderData).map((data) => {
//             return data.orderData ? (
//               data.orderData.order_data
//                 .slice(0)
//                 .reverse()
//                 .map((item, index) => {
//                   let date = null;
//                   return (
//                     <div key={index}>
//                       {item.map((arrayData) => {
//                         if (arrayData.Order_date) {
//                           date = arrayData.Order_date;
//                           return (
//                             <div
//                               key={date}
//                               style={{
//                                 color: 'black',
//                                 fontSize: '30px',
//                                 fontWeight: 'bold',
//                                 margin: '1rem 0',
//                               }}
//                             >
//                               {date}
//                             </div>
//                           );
//                         } else {
//                           return (
//                             <div
//                               key={arrayData._id}
//                               className="d-inline-block m-2"
//                               style={{ width: '16rem', maxWidth: '100%' }}
//                             >
//                               <div
//                                 className="card mt-3"
//                                 style={{ maxHeight: '400px' }}
//                               >
//                                 <img
//                                   src={arrayData.img}
//                                   className="card-img-top"
//                                   alt="..."
//                                   style={{ height: '120px', objectFit: 'fill' }}
//                                 />
//                                 <div className="card-body">
//                                   <h5 className="card-title">
//                                     {arrayData.name.toUpperCase()}
//                                   </h5>
//                                   <div
//                                     className="container w-100 p-0"
//                                     style={{ height: '38px' }}
//                                   >
//                                     <span className="m-1">{arrayData.qty}</span>
//                                     <span className="m-1">{arrayData.size}</span>
//                                     <span className="m-1">{date}</span>
//                                     <div className="d-inline ms-2 h-100 w-20 fs-5">
//                                       ₹{arrayData.price}/-
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           );
//                         }
//                       })}
//                     </div>
//                   );
//                 })
//             ) : (
//               ''
//             );
//           })
//         ) : (
//           ''
//         )}
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </>
//   );
// }


import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


export default function MyOrder() {
  const [orderData, setOrderData] = useState('');

  const BACKURL = process.env.CONNECT_TO_BACK_URL;
 
  const fetchMyOrder = async () => {
    console.log(localStorage.getItem('authEmail'));

    await fetch("http://localhost:5000/api/myOrderData", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: localStorage.getItem('authEmail'),
      }),
    }).then(async (res) => {
      let response = await res.json();
      await setOrderData(response);
    });
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);
  const handleButtonClicked = () => {
    const externalURL = 'https://www.fedex.com/en-in/home.html'; // Replace with the actual URL
    window.open(externalURL, '_blank'); // Opens the URL in a new tab/window
  };


  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container" style={{ color: 'white' }}>
        {orderData !== {} ? (
          Array(orderData).map((data) => {
            return data.orderData ? (
              <div key={data._id}>
                {data.orderData.order_data.slice(0).reverse().map((item, index) => {
                  let date = null;
                  return (
                    <div key={index}>
                      {item.map((arrayData) => {
                        if (arrayData.Order_date) {
                          date = arrayData.Order_date;
                      
                          return (
                            <div
                              key={date} className="order-container"
                              style={{
                                

                                color: 'black',
                                fontSize: '30px',
                                fontWeight: 'bold',
                                margin: '1rem 0',
                                display: 'flex',
                                justifyContent: 'space-between', // Aligns elements horizontally
                                alignItems: 'center', // Aligns elements vertically
                              }}
                            >
                              {date}

                              <button className='btn' id='track_btn' onClick={handleButtonClicked} style={{backgroundColor:'#2874f0',color:'white',fontWeight:'bold',letterSpacing:'1.5px'} }>
                                Track Order</button>
                            </div>
                             
                          
                          );  
                          } else {
                          return ( 
                            <div
                              key={arrayData._id}
                              className="d-inline-block m-2"
                              style={{ width: '16rem', maxWidth: '100%' }}
                            >
                              <div
                                className="card mt-3"
                                style={{ maxHeight: '400px' }}
                              >
                                {/* <img
                                  src={arrayData.img}
                                  className="card-img-top"
                                  alt="..."
                                  style={{ height: '120px', objectFit: 'fill' }}
                                /> */}
                                <div className="card-body">
                                  <h5 className="card-title">
                                    {arrayData.name.toUpperCase()}
                                  </h5>
                                  <div
                                    className="container w-100 p-0"
                                    style={{ height: '38px' }}
                                  >
                                    <span className="m-1">{arrayData.qty}</span>
                                    <span className="m-1">{arrayData.size}</span>
                                    <div className="d-inline ms-2 h-100 w-20 fs-5">
                                      ₹{arrayData.price}/-
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                           
                          );
                        }
                      })}
                    </div>
                  );
                })}
              </div>
            ) : (
              ''
            );
          })
        ) : (
          ''
        )}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

