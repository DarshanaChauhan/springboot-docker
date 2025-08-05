import React, { useState } from "react";
import { getEmployeeById, deleteEmployeeById } from "../../Service/employeeService";

const DeleteEmployee = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [employee, setEmployee] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleDelete = async () => {
    if (!employeeId) {
      setError("Please enter an employee ID.");
      setEmployee(null);
      setMessage("");
      return;
    }

    try {
      // 1. Get employee details
      const data = await getEmployeeById(employeeId);
      setEmployee(data);
      setError("");

      // 2. Ask for confirmation
      const confirmed = window.confirm(
        `Are you sure you want to delete employee?\n\nName: ${data.name}\nSalary: ${data.salary}`
      );

      if (!confirmed) return;

      // 3. Proceed with deletion
      await deleteEmployeeById(employeeId);
      setMessage(`Employee "${data.name}" with ID ${employeeId} was deleted successfully.`);
      setEmployee(null);
      setEmployeeId("");
      setError("");
    } catch (err) {
      setError("Employee not found or failed to delete. Please check the ID.");
      setEmployee(null);
      setMessage("");
    }
  };

  return (
    <div>
      <h2>Delete Employee</h2>
      <input
        type="number"
        placeholder="Enter Employee ID to delete"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>

      {employee && (
        <div style={{ marginTop: "1em", padding: "0.5em", border: "1px solid gray" }}>
          <p><strong>Employee Details:</strong></p>
          <p><strong>Name:</strong> {employee.name}</p>
          <p><strong>Salary:</strong> {employee.salary}</p>
        </div>
      )}

      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default DeleteEmployee;



// import React, { useState } from "react";
// import { deleteEmployeeById } from "../../Service/employeeService";

// const DeleteEmployee = () => {
//   const [employeeId, setEmployeeId] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleDelete = async () => {
//     if (!employeeId) {
//       setError("Please enter an employee ID.");
//       setMessage("");
//       return;
//     }

//     const confirmed = window.confirm(`Are you sure you want to delete employee with ID ${employeeId}?`);
//     if (!confirmed) return;

//     try {

//       await deleteEmployeeById(employeeId);
//       setMessage(`Employee with ID ${employeeId} was deleted successfully.`);
//       setEmployeeId("");
//       setError("");
//     } catch (err) {
//       setError("Failed to delete employee. Please check the ID.");
//       setMessage("");
//     }
//   };

//   return (
//     <div>
//       <h2>Delete Employee</h2>
//       <input
//         type="number"
//         placeholder="Enter Employee ID to delete"
//         value={employeeId}
//         onChange={(e) => setEmployeeId(e.target.value)}
//       />
//       <button onClick={handleDelete}>Delete</button>

//       {message && <p style={{ color: "green" }}>{message}</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default DeleteEmployee;


// import React, { useState } from "react";
// import { deleteEmployeeById } from "../../Service/employeeService";

// const DeleteEmployee = () => {
//   const [employeeId, setEmployeeId] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleDelete = async () => {
//     try {
//       const response = await deleteEmployeeById(employeeId);
//       setMessage(`Employee with ID ${employeeId} was deleted successfully.`);
//       setEmployeeId("");
//       setError("");
//     } catch (err) {
//       setError("Failed to delete employee. Please check the ID.");
//       setMessage("");
//     }
//   };

//   return (
//     <div>
//       <h2>Delete Employee</h2>
//       <input
//         type="number"
//         placeholder="Enter Employee ID to delete"
//         value={employeeId}
//         onChange={(e) => setEmployeeId(e.target.value)}
//       />
//       <button onClick={handleDelete}>Delete</button>

//       {message && <p style={{ color: "green" }}>{message}</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default DeleteEmployee;
