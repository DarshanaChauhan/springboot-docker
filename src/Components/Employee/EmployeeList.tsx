import { use } from "react";
import EmployeeDetails from "./EmployeeDetailsById";
import { useState, useEffect } from "react";
// Adjust the import path to match the actual location and filename of employeeService.ts
import { getAllEmployees } from "../../Service/employeeService";
import { Link } from "react-router-dom";

interface Employee {
  id: number;
  name: string;
  salary: number;
}

const EmployeeList = () => {

    const [empList, setEmpList] = useState<Employee[]>([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const data = await getAllEmployees();
                console.log("Employee Data:", data);
                setEmpList(data);
            } catch (error) {
                console.error("Error fetching employee data:", error);
            }
        }
        fetchEmployees();
    },[]);



    // const empList=[
    //     { name: "Sonu", salary: 95000 },
    //     { name: "Ronu", salary: 96000 },
    //     { name: "Monu", salary: 97000 },
    //     { name: "Tonu", salary: 98000 }
    // ]



    return (
        <>
        <div>
        <h2>Employee List</h2>
        
        {
            empList.map((empList) => (
                <p key={empList.id}>
                    {/* ID:{empList.id}, */}
                     Name: {empList.name}
                    {/* , Salary: {empList.salary} */}
                    <Link to={`/employee/${empList.id}`}>Employee Details</Link>
                </p>
            ))
        }
        
        </div>
        </>
    );
    }

export default EmployeeList;