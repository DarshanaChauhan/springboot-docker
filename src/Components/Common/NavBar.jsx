import { Link } from "react-router-dom";
import React from "react";
import EmployeeList from "../Employee/EmployeeList";
import './NavBar.css';

const NavBar = () => {
  return (
    <>
    <div className="navbar">
      {/* <h2>NavBar Page</h2> */}
        <Link to={"/"}>Home</Link> 
        <Link to={"/employee/List"}>Employee List</Link> 
        <Link to={"/employee/:id"}>Employee Details By Id</Link>
        <Link to={"/employee/Add"}>Add Employee</Link> 
        <Link to={"/employee/Update"}>Update Employee</Link> 
        <Link to={"/employee/Delete"}>Delete Employee</Link>
      {/* Add login form here */}
    </div>
    </>
  );
}

export default NavBar;