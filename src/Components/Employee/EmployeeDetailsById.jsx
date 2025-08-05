import { useEffect, useState } from "react";
import { getEmployeeById, getEmployeeByName } from '../../Service/employeeService'; // adjust path
import { useParams } from "react-router-dom";

const EmployeeDetailsById = () => {
//   const [employee, setEmployee] = useState(null);
//   const employeeParams = useParams();

//   useEffect(() => {
//     console.log("Employee ID from params:", employeeParams.id);
//     const fetchEmployeeById = async (id) => {
//       try {
//         const data = await getEmployeeById(id);
//         console.log("Employee Details:", data);
//         setEmployee(data);
//       } catch (error) {
//         console.error("Error fetching employee details:", error);
//       }
//     }
//     fetchEmployeeById(employeeParams.id);
//   }, []);


//   return (
//     <>
//     <p>Employee Details:</p>
//     <p>Employee Id: {employeeParams.id}</p>
//     {employee ? (
//       <div>
//         <p><strong>Name:</strong> {employee.name}</p>
//         <p><strong>Salary:</strong> {employee.salary}</p>
//       </div>
//     ) : (
//       <p>No employee found with ID: {employeeParams.id}</p>
//     )}
//     {/* Uncomment below if you want to add a link to go back to the list */}
//     {/* <Link to="/employee/List">Back to Employee List</Link> */}
//     </>
//   );
// };
  
  
  const [employee, setEmployee] = useState(null);
  const [inputId, setInputId] = useState("");
  // const [inputName, setInputName] = useState("");
  const [error, setError] = useState("");

  const handleGetById = async () => {
    try {
      const data = await getEmployeeById(inputId);
      setEmployee(data);
      setError("");
    } catch (err) {
      setError("Employee not found by ID");
    }
  };

  return (
    <>
      <h3>Employee Details</h3>

      <div>
        <input
          type="text"
          placeholder="Enter Employee ID"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
        />
        <button onClick={handleGetById}>Get Employee by ID</button>
      </div>


      {error && <p style={{ color: "red" }}>{error}</p>}
      <h4>Employees with Id {inputId}:</h4>
      {employee && (
        <div>
          <p><strong>Name:</strong> {employee.name}</p>
          <p><strong>Salary:</strong> {employee.salary}</p>
        </div>
      )}
    </>
  );
};

export default EmployeeDetailsById;