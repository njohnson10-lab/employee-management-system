import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeForm from './Components/EmployeeForm';

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
    <div>
      <EmployeeForm onSubmit={addEmployee} /> 
      <button onClick={saveData}>Save Data</button>
    </div>
  );
}

export default App;
