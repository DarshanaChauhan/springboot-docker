import { use, useState } from "react";
import { getEmployeeBySalary} from '../../Service/employeeService'; // adjust path

const EmployeeDetailsBySalary = () => {
  const [employees, setEmployees] = useState([]);
  const [inputSalary, setInputSalary] = useState("");
  const [error, setError] = useState("");



  const handleGetBySalary = async () => {
    try {
      const data = await getEmployeeBySalary(inputSalary);
      if(data.length==0)
      {
        setError("No employees found with this salary");
        setEmployees([]);
      }
      else{
        setEmployees(data);
        setError("");
      }
    } catch (err) {
      setError("Employee not found by Salary");
    }
  };

  return (
    <>
      <h3>Employee Details</h3>

      <div>
        <input
          type="number"
          placeholder="Enter Employee Salary"
          value={inputSalary}
          onChange={(e) => setInputSalary(e.target.value)}
        />
        <button onClick={handleGetBySalary}>Get Employee by Salary</button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {employees.length > 0 && (
        <div>
          <h4>Employees with salary ₹{inputSalary}:</h4>
          <ul>
            {employees.map((emp) => (
              <li key={emp.id}>
                ID: {emp.id}, Name: {emp.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default EmployeeDetailsBySalary;