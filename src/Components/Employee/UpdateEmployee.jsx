import React, { useState } from "react";
import { getEmployeeById, updateEmployee } from "../../Service/employeeService";

const UpdateEmployee = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const isNameValid = (name) => /^[A-Za-z\s]+$/.test(name); // Only characters and spaces
  const isSalaryValid = (salary) => !isNaN(salary) && salary >= 0;

  // Fetch employee details by ID
  const fetchEmployee = async () => {
    if (!employeeId) {
      setError("Please enter an employee ID.");
      setSuccess("");
      return;
    }

    try {
      const data = await getEmployeeById(employeeId);
      setEmployee(data);
      setError("");
      setSuccess("");
    } catch (err) {
      setError("Employee not found with this ID.");
      setEmployee(null);
      setSuccess("");
    }
  };

  // Update the employee
  const handleUpdate = async () => {
    if (!isNameValid(employee.name)) {
      setError("Name must only contain alphabetic characters.");
      setSuccess("");
      return;
    }

    if (!isSalaryValid(employee.salary)) {
      setError("Salary must be a valid non-negative number.");
      setSuccess("");
      return;
    }

    try {
      const updatedEmployee = {
        id: employee.id,
        name: employee.name,
        salary: employee.salary,
      };

      await updateEmployee(updatedEmployee);
      setSuccess("Employee updated successfully!");
      setError("");
    } catch (err) {
      setError("Failed to update employee.");
      setSuccess("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Update Employee</h2>

      <input
        type="number"
        placeholder="Enter Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <button onClick={fetchEmployee}>Fetch Employee</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      {employee && (
        <div style={{ marginTop: "20px" }}>
          <p>Employee ID: {employee.id}</p>
          <input
            type="text"
            placeholder="Enter New Name"
            value={employee.name}
            onChange={(e) =>
              setEmployee({ ...employee, name: e.target.value })
            }
          />
          <br />
          <input
            type="number"
            placeholder="Enter New Salary"
            value={employee.salary}
            onChange={(e) =>
              setEmployee({ ...employee, salary: Number(e.target.value) })
            }
          />
          <br />
          <button onClick={handleUpdate}>Update Employee</button>
        </div>
      )}
    </div>
  );
};

export default UpdateEmployee;


// import React, { useState } from "react";
// import { getEmployeeById, updateEmployee } from "../../Service/employeeService";

// const UpdateEmployee = () => {
//   const [employeeId, setEmployeeId] = useState("");
//   const [employee, setEmployee] = useState(null);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // Fetch employee details by ID
//   const fetchEmployee = async () => {
//     try {
//       const data = await getEmployeeById(employeeId);
//       setEmployee(data);
//       setError("");
//       setSuccess("");
//     } catch (err) {
//       setError("Employee not found with this ID");
//       setEmployee(null);
//       setSuccess("");
//     }
//   };

//   // Update the employee
//   const handleUpdate = async () => {
//     try {
//       const updatedEmployee = {
//         id: employee.id,
//         name: employee.name,
//         salary: employee.salary,
//       };

//       await updateEmployee(updatedEmployee);
//       setSuccess("Employee updated successfully!");
//       setError("");
//     } catch (err) {
//       setError("Failed to update employee");
//       setSuccess("");
//     }
//   };

//   return (
//     <div>
//       <h2>Update Employee</h2>

//       <input
//         type="number"
//         placeholder="Enter Employee ID"
//         value={employeeId}
//         onChange={(e) => setEmployeeId(e.target.value)}
//       />
//       <button onClick={fetchEmployee}>Fetch Employee</button>

//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {success && <p style={{ color: "green" }}>{success}</p>}

//       {employee && (
//         <div>
//           <p>Employee ID: {employee.id}</p>
//           <input
//             type="text"
//             placeholder="Enter New Name"
//             value={employee.name}
//             onChange={(e) =>
//               setEmployee({ ...employee, name: e.target.value })
//             }
//           />
//           <br />
//           <input
//             type="number"
//             placeholder="Enter New Salary"
//             value={employee.salary}
//             onChange={(e) =>
//               setEmployee({ ...employee, salary: Number(e.target.value) })
//             }
//           />
//           <br />
//           <button onClick={handleUpdate}>Update Employee</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UpdateEmployee;



// // import { useState } from "react";
// // import { updateEmployeeById } from "../../Service/employeeService"; // Update path if needed



// // const UpdateEmployee = () => {
// //   const [employeeId, setEmployeeId] = useState("");
// //   const [name, setName] = useState("");
// //   const [salary, setSalary] = useState("");
// //   const [message, setMessage] = useState("");


// //   const handleUpdate = async () => {
// //   const updatedEmployee = {
// //     id: employee.id, // Make sure employee.id exists
// //     name: employee.name,
// //     salary: employee.salary,
// //     // any other fields
// //   };
// //   try {
// //     await updateEmployeeById(updatedEmployee);
// //     console.log("Employee updated successfully");
// //     setMessage(`Employee with ID ${employeeId} updated successfully.`);
// //   } catch (error) {
// //     console.error("Error updating employee:", error);
// //     setMessage("Failed to update employee.");
// //   }
// // };
// //   // const handleUpdate = async () => {
// //   //   if (!employeeId || !name || !salary) {
// //   //     setMessage("Please fill all fields.");
// //   //     return;
// //   //   }

// //   //   try {
// //   //     const updatedEmployee = {
// //   //       name: name,
// //   //       salary: parseFloat(salary),
// //   //     };

// //   //     const response = await updateEmployeeById(employeeId, updatedEmployee);
// //   //     setMessage(`Employee with ID ${employeeId} updated successfully.`);
// //   //   } catch (err) {
// //   //     console.error("Error updating employee:", err);
// //   //     setMessage("Failed to update employee.");
// //   //   }
// //   // };

// //   return (
// //     <div>
// //       <h3>Update Employee</h3>
// //       <input
// //         type="text"
// //         placeholder="Employee ID"
// //         value={employeeId}
// //         onChange={(e) => setEmployeeId(e.target.value)}
// //       />
// //       <input
// //         type="text"
// //         placeholder="New Name"
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //       />
// //       <input
// //         type="number"
// //         placeholder="New Salary"
// //         value={salary}
// //         onChange={(e) => setSalary(e.target.value)}
// //       />
// //       <button onClick={handleUpdate}>Update Employee</button>
// //       {message && <p>{message}</p>}
// //     </div>
// //   );
// // };

// // export default UpdateEmployee;
