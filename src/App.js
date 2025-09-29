import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import EmployeeForm from './Components/EmployeeForm';
import EmployeeList from './Components/EmployeeList';
import EmployeeDetail from './Components/EmployeeDetail';
import './index.css';

function App() {
  const [employees, setEmployees] = useState([]);

  // Load employees from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('employees');
    if (saved) {
      setEmployees(JSON.parse(saved));
    }
  }, []);

  // Save employees to localStorage
  const saveData = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  const addEmployee = (employee) => {
    const newEmployee = { ...employee, id: Date.now() };
    setEmployees(prev => [...prev, newEmployee]);
    saveData();
  };

  const deleteEmployee = (id) => {
    setEmployees(prev => prev.filter(emp => emp.id !== id));
    saveData();
  };

  const editEmployee = (updatedEmp) => {
    setEmployees(prev => 
      prev.map(emp => emp.id === updatedEmp.id ? updatedEmp : emp)
    );
    saveData();
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Employee Management System</h1>
          <nav>
            <Link to="/" className="nav-link">Employee List</Link>
          </nav>
        </header>
        
        <Routes>
          <Route path="/" element={
            <>
              <EmployeeForm onSubmit={addEmployee} />
              <EmployeeList employees={employees} />
              <button onClick={saveData} className="save-button">Save Data</button>
            </>
          } />
          <Route path="/employees/:id" element={
            <EmployeeDetail 
              employees={employees} 
              onDelete={deleteEmployee}
              onEdit={editEmployee}
            /> 
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;