// src/App.js
import React, { useState } from 'react';
import './App.css';
import EmployeeForm from './Components/EmployeeForm';

function App() {
  const [notification, setNotification] = useState('');

  const handleEmployeeSubmit = (employee) => {
    setNotification(`New employee added: ${employee.name}`);
    setTimeout(() => {
      setNotification('');
    }, 3000); // Clear notification after 3 seconds
  };

  return (
    <div className="App">
      <h1>Employee Management System</h1>
      <EmployeeForm onSubmit={handleEmployeeSubmit} />
      {notification && <p className="notification">{notification}</p>}
    </div>
  );
}

export default App;