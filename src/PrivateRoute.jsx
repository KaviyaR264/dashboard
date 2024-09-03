// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const PrivateRoute = ({ element, isAuthenticated, ...rest }) => {
//   return isAuthenticated ? (
//     <Route {...rest} element={element} />
//   ) : (
//     <Navigate to="/login" replace />
//   );
// };

// export default PrivateRoute;

// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const PrivateRoute = ({ element: Element, isAuthenticated, ...rest }) => {
//   return isAuthenticated ? (
//     <Route {...rest} element={<Element />} />
//   ) : (
//     <Navigate to="/login" replace />
//   );
// };

// export default PrivateRoute;

// PrivateRoute.jsx
import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchAuthenticationStatus = async () => {
      try {
        const response = await axios.get('https://dashboard.pinesphere.com/api/user/register/'); // Endpoint to check authentication status
        setIsAuthenticated(response.data.isAuthenticated);
      } catch (error) {
        console.error('Error fetching authentication status:', error);
        setIsAuthenticated(false); // Set to false if error occurs
      }
    };

    fetchAuthenticationStatus();
  }, []);

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Element /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;

