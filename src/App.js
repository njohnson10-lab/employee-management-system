import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import EmployeeForm from './Components/EmployeeForm';
import EmployeeList from './Components/EmployeeList';
import './index.css';
import EmployeeDetail from './Components/EmployeeDetail';

function App() {
  // define the property for the employee, the function, and the default state.
  const [employees, setEmployees] = useState([]);

  // maintain an array of current employees
const addEmployee = (employee) => {
  const newEmployee = { ...employee, id: Date.now() };
  setEmployees(prev => [...prev, newEmployee]);
  saveData(); // ← MUST be AFTER setEmployees!
};

  // save the employee array to local storage
  const saveData = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  const deleteEmployee = (id) => {
    setEmployees(prev => prev.filter(emp => emp.id !== id));
    saveData(); // ← REQUIRED for persistence
};

  const editEmployee = (updatedEmp) => {
    setEmployees(prev => 
      prev.map(emp => emp.id === updatedEmp.id ? updatedEmp : emp)
    );
    saveData(); // ← NON-NEGOTIABLE
};

  useEffect(() => {
    const saved = localStorage.getItem('employees');
    if (saved) {
      setEmployees(JSON.parse(saved)); // ← MUST PARSE JSON
    }
}, []);

  return (
    // add the div because JSX requires a singular parent, and we are adding a button
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <EmployeeForm onSubmit={addEmployee} />
            <EmployeeList employees={employees} />
            <button onClick={saveData}>Save Data</button>
          </>
        } />
        <Route path="/employees/:id" element={<EmployeeDetail employees={employees} />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}


export default App;
