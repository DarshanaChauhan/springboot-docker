import { use, useState } from "react";
import { getEmployeeByName } from '../../Service/employeeService'; // adjust path

const EmployeeDetailsByName = () => {
  const [employee, setEmployee] = useState([]);
  const [inputName, setInputName] = useState("");
  const [error, setError] = useState("");



  const handleGetByName = async () => {
    try {
      const data = await getEmployeeByName(inputName);
      if(data.length==0)
      {
        setError("No employees found with this salary");
        setEmployee([]);
      }
      else{
        setEmployee(data);
        setError("");
      }
    } catch (err) {
      setError("Employee not found by Name");
    }
  };

  return (
    <>
      <h3>Employee Details</h3>

      <div>
        <input
          type="text"
          placeholder="Enter Employee Name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <button onClick={handleGetByName}>Get Employee by Name</button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {employee.length > 0 && (
        <div>
          <h4>Employees with name {inputName}:</h4>
          <ul>
            {employee.map((emp) => (
              <li key={emp.id}>
                <p>ID: {emp.id}</p> 
                <p>Name: {emp.name}</p> 
                <p>Salary: {emp.salary}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default EmployeeDetailsByName;