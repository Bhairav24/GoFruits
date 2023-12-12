// import React from 'react';

// const PaymentOptionsModal = ({ onClose }) => {
//   const handlePaymentSuccess = () => {
//     onClose('success');
//   };

//   const handlePaymentFailure = () => {
//     onClose('failure');
//   };

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: '70%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         backgroundColor: 'white',
//         color: 'red',
//         padding: '20px',
//         borderRadius: '10px',
//         zIndex: '9999',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
//       }}
//     >
//       <h2 style={{ marginBottom: '20px', textAlign: 'center',color:'grey' }}>Payment Options</h2>
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <button className="btn" style={{ marginRight: '10px',backgroundColor: '#2874f0', color: 'white' }} onClick={handlePaymentSuccess}>UPI</button>
//         <button className="btn " style={{ backgroundColor: '#2874f0', color: 'white' }} onClick={handlePaymentSuccess}>COD</button>
//       </div>
//       <div style={{ textAlign: 'center', marginTop: '20px' }}>
//         <button className="btn btn-danger" onClick={handlePaymentFailure}>X</button>
//       </div>
//     </div>
//   );
// };

// export default PaymentOptionsModal;


import React from 'react';


const PaymentOptionsModal = ({ onClose }) => {
  const handlePaymentSuccess = () => {
    onClose('success');
  };

  const handlePaymentFailure = () => {
    onClose('failure');
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '70%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        color: 'red',
        padding: '20px',
        borderRadius: '10px',
        zIndex: '9999',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
      }}
    >
      <button
        className="btn "
        onClick={handlePaymentFailure}
        style={{
          position: 'absolute',
          top: '-14px',
          right: '5px',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          fontWeight: 'bold',
          border: 'none',
          cursor: 'pointer',
          color:'white',
          backgroundColor:'red'
        }}
      >
        X
      </button>
      <h2 style={{ marginBottom: '20px', textAlign: 'center', color: 'black ' }}>Payment Options</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="btn" style={{ marginRight: '10px', backgroundColor: "#2bb24c",color:'white' }} onClick={handlePaymentSuccess}>UPI</button>
        <button className="btn " style={{ backgroundColor: '#2bb24c', color: 'white' }} onClick={handlePaymentSuccess}>COD</button>
      </div>
    </div>
  );
};

export default PaymentOptionsModal;
