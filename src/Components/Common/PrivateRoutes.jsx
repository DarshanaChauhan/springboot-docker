import { Outlet, Navigate } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";

const PrivateRoutes = () => {
  const { isAuthenticated } = useApp();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;

// Components/Common/PrivateRoutes.jsx
// src/Components/Common/PrivateRoutes.jsx

// import React, { useContext } from "react";
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { UserContext } from "../context/UserContext";

// const PrivateRoutes = () => {
//   const { isAuthenticated } = useContext(UserContext);
//   const location = useLocation();

//   if (!isAuthenticated) {
//     return (
//       <Navigate
//         to="/login"
//         replace
//         state={{ from: location, message: "Please login to continue" }}
//       />
//     );
//   }

//   return <Outlet />;
// };

// export default PrivateRoutes;
