
import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from './Login';
import Register from './Register';
import EmpList from "../Employee/EmployeeList";
import AddEmployee from "../Employee/AddEmployee";
import EmpDetailsById from "../Employee/EmployeeDetailsById";
import Page404 from './Page404';

const AppRouters = () => {
  return (
    <>
      {/* <p>
        AppRouters Component
      </p> */}
      {/* <BrowserRouter> */}
      {/* <NavBar /> */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to={"/"} />} />
            <Route path="/employee/List" element={<EmpList />} />
            <Route path="/employee/:id" element={<EmpDetailsById />} />
            <Route path="/employee/Add" element={<AddEmployee />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Page404/>} />
        </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}


export default AppRouters;