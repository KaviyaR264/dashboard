// // import React from 'react';
// // import Cookies from 'js-cookie';
// // import {
// //   BsGrid1X2Fill,
// //   BsMenuButtonWideFill,
// //   BsFillGearFill
// // } from 'react-icons/bs';

// // function Sidebar({ openSidebarToggle, OpenSidebar }) {
// //   const handleLogout = () => {
// //     Cookies.remove('jwt')

    
// //     window.location.href = '/'; 
// //   };

// //   return (
// //     <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
// //       <div className='sidebar-title'>
// //       </div>
// //       <ul className='sidebar-list'>
// //         <li className='sidebar-list-item'>
// //           <a href="">
// //             <BsGrid1X2Fill className='icon'/> Dashboard
// //           </a>
// //         </li>
// //         <li className='sidebar-list-item'>
// //           <a href="/reports">
// //             <BsMenuButtonWideFill className='icon'/> Reports
// //           </a>
// //         </li>
// //         <li className='sidebar-list-item'>
// //           <a href="#" onClick={handleLogout}>
// //             <BsFillGearFill className='icon'/> Logout
// //           </a>
// //         </li>
// //       </ul>
// //     </aside>
// //   );
// // }

// // export default Sidebar;


// // Sidebar.js

// import React from 'react';
// import Cookies from 'js-cookie';
// import {
//   BsGrid1X2Fill,
//   BsMenuButtonWideFill,
//   BsFillGearFill
// } from 'react-icons/bs';
// import './Sidebar.css';

// function Sidebar({ openSidebarToggle }) {
//   const handleLogout = () => {
//     Cookies.remove('jwt');
//     window.location.href = '/'; 
//   };

//   return (
//     <aside id="sidebar" className={openSidebarToggle ? "sidebar sidebar-responsive" : "sidebar"}>
//       <div className='sidebar-title'>
//         <h1>Dashboard</h1>
//       </div>
//       <ul className='sidebar-list'>
//         <li className='sidebar-list-item'>
//           <a href="">
//             <BsGrid1X2Fill className='icon'/> Dashboard
//           </a>
//         </li>
//         <li className='sidebar-list-item'>
//           <a href="/reports">
//             <BsMenuButtonWideFill className='icon'/> Reports
//           </a>
//         </li>
//         <li className='sidebar-list-item'>
//           <a href="#" onClick={handleLogout}>
//             <BsFillGearFill className='icon'/> Logout
//           </a>
//         </li>
//       </ul>
//       <footer className="login-footer">
//     <p>@ <a href="https://pinesphere.com/">Pinesphere</a>. All rights reserved.</p>
// </footer>
     
//     </aside>
    
    
//   );
  
  
// }

// export default Sidebar;

// Sidebar.js

import React from 'react';
import Cookies from 'js-cookie';
import { BsGrid1X2Fill, BsMenuButtonWideFill, BsFillPersonFill } from 'react-icons/bs';
import Header from './Header'; // Import the Header component
import './Sidebar.css';

function Sidebar({ openSidebarToggle }) {
  const handleLogout = () => {
    Cookies.remove('jwt');
    window.location.href = '/'; 
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar sidebar-responsive" : "sidebar"}>
      <Header handleLogout={handleLogout} /> {/* Include the Header component */}
      <div className='sidebar-title'>
        <h1>Dashboard</h1>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="">
            <BsGrid1X2Fill className='icon'/> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/reports">
            <BsMenuButtonWideFill className='icon'/> Reports
          </a>
        </li>
      </ul>
      <footer className="login-footer">
        <p>@ <a href="https://pinesphere.com/">Pinesphere</a>. All rights reserved.</p>
      </footer>
    </aside>
  );
}

export default Sidebar;

