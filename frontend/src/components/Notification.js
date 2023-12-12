// import React from 'react';

// const Notification = ({ message }) => {
//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         backgroundColor: '#2874f0', // Change the background color to a more visible color
//         color: 'yellow', // Change the text color to white for better contrast
//         padding: '20px',
//         borderRadius: '10px',
//         zIndex: '9999',
//       }}
//     >
//       {message}
//     </div>
//   );
// };

// export default Notification;


import React from 'react';

const Notification = ({ message, show }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#2bb24c',
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        zIndex: '9999',
        opacity: show ? 1 : 0, // Control the opacity based on show prop
        transition: 'opacity 0.3s ease-in-out', // Add a transition effect to opacity
        fontWeight:'bold',
        fontSize:'90px'
      }}
    >
      {message}
    </div>
  );
};

export default Notification;
