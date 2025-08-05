import { use, useState } from "react";
import { getEmployeeBySalaryGreaterThan} from '../../Service/employeeService'; // adjust path

const EmployeeDetailsBySalaryGreaterThan = () => {
  const [employees, setEmployees] = useState([]);
  const [inputSalaryGreaterThan, setInputSalaryGreaterThan] = useState("");
  const [error, setError] = useState("");



  const handleGetBySalaryGreaterThan = async () => {
    try {
      const data = await getEmployeeBySalaryGreaterThan(inputSalaryGreaterThan);
      if(data.length==0)
      {
        setError("No employees found with greater salary");
        setEmployees([]);
      }
      else{
        setEmployees(data);
        setError("");
      }
    } catch (err) {
      setError("Employee not found with Greater Salary");
    } 
  };

  return (
    <>
      <h3>Employee Details</h3>

      <div>
        <input
          type="number"
          placeholder="Enter Employee Salary Greater"
          value={inputSalaryGreaterThan}
          onChange={(e) => setInputSalaryGreaterThan(e.target.value)}
        />
        <button onClick={handleGetBySalaryGreaterThan}>Get Employee by Salary Greater</button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {employees.length > 0 && (
        <div>
          <h4>Employees with salary greater than ₹{inputSalaryGreaterThan}:</h4>
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

export default EmployeeDetailsBySalaryGreaterThan;