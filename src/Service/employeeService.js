// export const getAllEmployees = async () => {
//     const response = await fetch("http://localhost:8080/employees");
//     if (!response.ok) {
//         throw new Error("Failed to fetch employees");
//     }
//     return await response.json();
// };


// const response = await axios.get(apiUrl, {
//   auth: {
//     username: "zeel",
//     password: "Zeel@1811"
//   }
// });

// try {
//   const response = await axios.get(apiUrl, {
//     auth: {
//       username: "zeel",
//       password: "Zeel@1811"
//     }
//   });
//   console.log("Status Code:", response.status); // Should be 200
//   console.log("Data:", response.data);
// } catch (error) {
//   if (error.response) {
//     console.error("Error Status:", error.response.status);
//     console.error("Error Data:", error.response.data);
//   } else {
//     console.error("Network Error:", error.message);
//   }
// }

import axios from 'axios';

const apiUrl = "http://localhost:8080/api/v1/employees";

axios.defaults.authentication = {
    username: "zeel",
    password: "Zeel@1811"
};


const getAllEmployees = async () => {
    try {
        console.log(getAllEmployees);
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error("Error fetching employees:", error);
        throw error;
    }
};

const addEmployee = async (employee) => {
    try {
        const response = await axios.post(apiUrl, employee);
        return response.data;
    } catch (error) {
        console.error("Error adding employee:", error);
        throw error;
    }
};

const updateEmployee = async (employeeData) => {
  try {
    const response = await axios.put(`${apiUrl}`, employeeData);
    return response.data; // Assuming the API returns the updated employee
  } catch (error) {   
    console.error(`Error updating employee with ID ${id}:`, error);
    throw error;
  } 
};

const deleteEmployeeById = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response.data; // Assuming backend returns a success message
  } catch (error) {
    console.error(`Error deleting employee with ID ${id}:`, error);
    throw error;
  }
};

const getEmployeeById = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/id/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching employee with ID ${id}:`, error);
    throw error;
  }
};

const getEmployeeByName = async (name) => {
  try {
    const response = await axios.get(`${apiUrl}/name/${name}`); // or use query param
    return response.data;
  } catch (error) {
    console.error(`Error fetching employee with name ${name}:`, error);
    throw error;
  }
};

const getEmployeeBySalary = async (salary) => {
  try {
    const response = await axios.get(`${apiUrl}/salary/${salary}`); // or use query param
    return response.data;
  } catch (error) {
    console.error(`Error fetching employee with salary ${salary}:`, error);
    throw error;
  }
};

const getEmployeeBySalaryGreaterThan = async (salary) => {
  try {
    const response = await axios.get(`${apiUrl}/salarygreater/${salary}`); // or use query param
    return response.data;
  } catch (error) {
    console.error(`Error fetching employee with salary ${salary}:`, error);
    throw error;
  }
};

export  { getAllEmployees, updateEmployee, getEmployeeById, addEmployee, getEmployeeByName, getEmployeeBySalary, getEmployeeBySalaryGreaterThan, deleteEmployeeById };