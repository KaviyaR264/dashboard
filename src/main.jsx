// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import App from './App.jsx';
// import Reports from './Reports'; 
// import Login from './Login';

// ReactDOM.createRoot(document.getElementById('root')).render(
  
//     <Router>
//       <Routes>
//         <Route path="/home" element={<App />} />
//         <Route path="/reports" element={<Reports />} />
//         <Route path="/login" element={<Login />} />
        

//       </Routes>
//     </Router>
 
// );


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Routes } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
// import App from './App.jsx';
// import Reports from './Reports'; 
// import Login from './Login';

// const isAuthenticated = true; // Replace with your authentication logic

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Router>
//     <Routes>
//       <PrivateRoute path="/" element={<login />} isAuthenticated={isAuthenticated} />
//       <PrivateRoute path="/home" element={<App />} isAuthenticated={isAuthenticated} />
//       <Route path="/reports" element={<Reports />} />
//     </Routes>
//   </Router>
// );


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import App from './App.jsx';
// import Reports from './Reports'; 
// import Login from './Login';

// ReactDOM.createRoot(document.getElementById('root')).render(
  
//     <Router>
//       <Routes>
//         {/* Set the login route as the default route */}
//         <Route path="/" element={<Login />} />
//         <Route path="/home" element={<App />} />
//         <Route path="/reports" element={<Reports />} />
//       </Routes>
//     </Router>
 
// );


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
// import App from './App.jsx';
// import Reports from './Reports'; 
// import Login from './Login';

// const isAuthenticated = false; // Initially, the user is not authenticated

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Router>
//     <Routes>
      {/* Set the login route */}
      // <Route path="/" element={<Login />} />
      
      {/* Private routes accessible only after successful login */}
//       <PrivateRoute path="/home" element={<App />} isAuthenticated={isAuthenticated} />
//       <PrivateRoute path="/reports" element={<Reports />} isAuthenticated={isAuthenticated} />
//     </Routes>
//   </Router>
// );



import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import App from './App.jsx';
import Login from './Login';
import Reports from './Reports'; 

// Function to check if JWT token exists in cookie
const checkAuth = () => {
  return Cookies.get('jwt') ? true : false;
};

// PrivateRoute component to handle authentication
const PrivateRoute = ({ element: Element, ...rest }) => (
  checkAuth() ? <Element /> : <Navigate to="/login" />
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      {/* <Route path="/home" element={<PrivateRoute element={App} />} /> */}
      <Route path="/reports" element={<PrivateRoute element={Reports} />} /> {/* Route for Reports */}
      <Route path="/login" element={<Login />} /> {/* Assuming Login component exists */}
      <Route path="/" element={<Navigate to="/reports" />} /> {/* Default route */}
    </Routes>
  </Router>
);

