// import React, { useContext } from "react";
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import { AppProvider } from "./Components/context/AppContext.jsx";
// import { UserProvider, UserContext } from "./Components/context/UserContext.jsx";
// import Login from "./Components/Common/Login";
// import NavBar from "./Components/Common/NavBar";
// import Home from "./Components/Common/Home";
// import PrivateRoutes from "./Components/Common/PrivateRoutes";
// import EmployeeList from "./Components/Employee/EmployeeList";
// import EmployeeDetailsById from "./Components/Employee/EmployeeDetailsById";
// import AddEmployee from "./Components/Employee/AddEmployee";
// import UpdateEmployee from "./Components/Employee/UpdateEmployee";
// import DeleteEmployee from "./Components/Employee/DeleteEmployee";

// // ✅ Helper component to use hooks outside Router
// const AppContent = () => {
//   const { isAuthenticated } = useContext(UserContext);
//   const location = useLocation();
//   const isLoginPage = location.pathname === "/login";

//   return (
//     <>
//       {/* ✅ Show NavBar only if logged in and not on login page */}
//       {isAuthenticated && !isLoginPage && <NavBar />}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />

//         {/* ✅ Protected routes */}
//         <Route element={<PrivateRoutes />}>
//           <Route path="/employee/List" element={<EmployeeList />} />
//           <Route path="/employee/:id" element={<EmployeeDetailsById />} />
//           <Route path="/employee/Add" element={<AddEmployee />} />
//           <Route path="/employee/Update" element={<UpdateEmployee />} />
//           <Route path="/employee/Delete" element={<DeleteEmployee />} />
//         </Route>
//       </Routes>
//     </>
//   );
// };

// function App() {
//   return (
//     <AppProvider>
//       <UserProvider>
//         {/* <BrowserRouter> */}
//           <AppContent />
//         {/* </BrowserRouter> */}
//       </UserProvider>
//     </AppProvider>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./Components/context/AppContext.jsx";
import { UserProvider } from "./Components/context/UserContext.jsx";
import Login from "./Components/Common/Login";
import NavBar from "./Components/Common/NavBar";
import Home from "./Components/Common/Home";
import PrivateRoutes from "./Components/Common/PrivateRoutes";
import EmployeeList from "./Components/Employee/EmployeeList";
import EmployeeDetailsById from "./Components/Employee/EmployeeDetailsById";
import AddEmployee from "./Components/Employee/AddEmployee";  
import UpdateEmployee from "./Components/Employee/UpdateEmployee";
import DeleteEmployee from "./Components/Employee/DeleteEmployee";
import { UserContext } from './Components/context/UserContext.jsx';
import { useContext } from 'react';

function App() {
  // const { isAuthenticated } = useContext(UserContext);
  return (
      <AppProvider>
        <UserProvider>
           {/* {isAuthenticated && <NavBar />} */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route element={<PrivateRoutes />}>
              <Route path="/navbar" element={<NavBar />} />
              <Route path="/employee/List" element={<EmployeeList />} />
              <Route path="/employee/:id" element={<EmployeeDetailsById />} />
              <Route path="/employee/Add" element={<AddEmployee />} />
              <Route path="/employee/Update" element={<UpdateEmployee />} />
              <Route path="/employee/Delete" element={<DeleteEmployee />} />
            </Route>
          </Routes>
        </UserProvider>
      </AppProvider>
  );
}

export default App;


// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import AddEmployee from "./Components/Employee/AddEmployee";
// import EmployeeList from "./Components/Employee/EmployeeList";
// import './App.css'; // optional, if you use styling
// import EmployeeDetailsById from "./Components/Employee/EmployeeDetailsById";
// import EmployeeDetailsByName from "./Components/Employee/EmployeeDetailsByName";
// import EmployeeDetailsBySalary from "./Components/Employee/EmployeeDetailsBySalary"; 
// import EmployeeDetailsBySalaryGreaterThan from "./Components/Employee/EmployeeDetailsWithSalaryGreater"; 
// import UpdateEmployee from "./Components/Employee/UpdateEmployee";
// import DeleteEmployee from "./Components/Employee/DeleteEmployee";



// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <h1>Employee Management System</h1>

//         <nav style={{ marginBottom: '20px' }}>
//           <button><Link to="/">Home</Link></button>
//           <button><Link to="/add">Add Employee</Link></button>
//           <button><Link to="/update">Update Employee Details</Link></button>
//           <button><Link to="/list">Employee List</Link></button>
//           {/* <button><Link to="/getbyid">Get Employee By Id</Link></button> */}
//           {/* <button><Link to="/getbyname">Get Employee By Name</Link></button>
//           <button><Link to="/getbysalary">Get Employee By Salary</Link></button>
//           <button><Link to="/getbysalarygreater">Get Employee By Salary Greater</Link></button> */}
//           <button><Link to="/delete">Delete Employee</Link></button>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/add" element={<AddEmployee />} />
//           <Route path="/update" element={<UpdateEmployee />} />
//           <Route path="/list" element={<EmployeeList />} />
//           {/* <Route path="/getbyid" element={<EmployeeDetailsById />} /> */}
//           {/* <Route path="/getbyname" element={<EmployeeDetailsByName />} />
//           <Route path="/getbysalary" element={<EmployeeDetailsBySalary />} />
//           <Route path="/getbysalarygreater" element={<EmployeeDetailsBySalaryGreaterThan />} /> */}
//           <Route path="/delete" element={<DeleteEmployee />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// const Home = () => (
//   <div>
//     <p>Welcome to the Employee Management System.</p>
//     <p>Use the buttons above to navigate.</p>
//   </div>
// );

// export default App;


// //    java -jar zipkin-server-3.5.1-exec.jar

// // import AddEmployee from "./Components/Employee/AddEmployee";
// // import EmployeeDetails from "./Components/Employee/EmployeeDetailsById";
// // import EmployeeList from "./Components/Employee/EmployeeList";
// // const App = () => {

// //   return (
// //     <>
// //     {/* <EmployeeDetails></EmployeeDetails> */}

// //     <h1>Employee Management System</h1>
// //     <EmployeeList></EmployeeList>
// //     <hr />
    
// //     <AddEmployee/>
// //     <hr/>
    
// //     <hr />
// //     <EmployeeDetails></EmployeeDetails>
// //     <hr />
// //     </>
// //   )

// // }
// // export default App;
