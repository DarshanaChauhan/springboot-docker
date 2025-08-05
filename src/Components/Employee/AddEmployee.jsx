import React, { useState } from 'react';
import { addEmployee } from '../../Service/employeeService'; // adjust the path as needed

const AddEmployee = () => {
  const [emp, setEmp] = useState({ name: '', salary: '' });
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState('');

  const handleInput = (e) => {
    const { name, value } = e.target;
    setEmp({ ...emp, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!emp.name.trim()) {
      setError('Name is required.');
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(emp.name)) {
      setError('Name must contain only characters.');
      return;
    }

    if (!emp.salary || isNaN(emp.salary)) {
      setError('Salary must be a number.');
      return;
    }

    if (Number(emp.salary) <= 0) {
      setError('Salary must be a positive number.');
      return;
    }

    try {
      const addedEmp = await addEmployee({
        name: emp.name.trim(),
        salary: Number(emp.salary),
      });

      setSubmittedData(addedEmp);
      setError('');
      setEmp({ name: '', salary: '' }); // Reset form
    } catch (err) {
      setError('Failed to add employee.');
    }
  };

  return (
    <>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={emp.name}
          onChange={handleInput}
          placeholder="Employee Name"
          required
        />
        <input
          type="number"
          name="salary"
          value={emp.salary}
          onChange={handleInput}
          placeholder="Salary"
          required
        />
        <button type="submit">Add Employee</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {submittedData && (
        <>
          <p>Submitted to server:</p>
          <p>Employee Name: {submittedData.name}</p>
          <p>Salary: {submittedData.salary}</p>
        </>
      )}
    </>
  );
};

export default AddEmployee;


// import React, { useState } from 'react';
// import { addEmployee } from '../../Service/employeeService'; // adjust the path as needed

// const AddEmployee = () => {
//   const [emp, setEmp] = useState({ name: '', salary: '' });
//   const [submittedData, setSubmittedData] = useState(null);
//   const [error, setError] = useState('');

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setEmp({ ...emp, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const addedEmp = await addEmployee(emp);
//       setSubmittedData(addedEmp); // show submitted data from backend response
//       setError('');
//       setEmp({ name: '', salary: '' }); // clear form
//     } catch (err) {
//       setError('Failed to add employee');
//     }
//   };

//   return (
//     <>
//       <h2>Add Employee</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={emp.name}
//           onChange={handleInput}
//           placeholder="Employee Name"
//           required
//         />
//         <input
//           type="number"
//           name="salary"
//           value={emp.salary}
//           onChange={handleInput}
//           placeholder="Salary"
//           required
//         />
//         <button type="submit">Add Employee</button>
//       </form>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {submittedData && (
//         <>
//           <p>Submitted to server:</p>
//           <p>Employee Name: {submittedData.name}</p>
//           <p>Salary: {submittedData.salary}</p>
//         </>
//       )}
//     </>
//   );
// };

// export default AddEmployee;



// // import React, { useState } from 'react';

// // const AddEmployee = () => {

// //     const [emp, setEmp] = useState({name: '', salary: ''});
// //     const [submittedData, setSubmitData] = useState({name: '', salary: ''});

// //     const handleInput = (e) => {
// //         // const { name, value } = e.target;
// //         console.log(e.target.value);
// //         setEmp({...emp,[e.target.name]: e.target.value});
// //         // const { name, value } = e.target;
// //         // setEmp({ ...emp, [name]: value });
        
// //     }

// //         const handleSubmit = (e) => {
// //             e.preventDefault();
// //             console.log(e.target);
// //             setSubmitData(emp);
// //         }

// //     return(
// //         <>
// //         <h2>Add Employee</h2>
// //         <p>Employee Name: {emp.name}</p>
// //         <p>Salary: {emp.salary}</p>

// //         <p>Data after submitted the form:</p>
// //         <p>Employee Name: {submittedData.name}</p>
// //         <p>Salary: {submittedData.salary}</p>

// //         <form onSubmit={handleSubmit}>
// //             <input type="text" name="name" value={emp.name} onChange={handleInput} autoFocus/>
// //             <input type="number" name="salary" value={emp.salary} onChange={handleInput} />
            
// //             <button type="submit" value="Submit">Add Employee</button>
// //         </form>
// //         </>
// //     )
// // };



// // export default AddEmployee;