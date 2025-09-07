// src/Components/EmployeeForm.js
import React, { useState } from 'react';
import '../Content/employee.css';

function EmployeeForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const employee = {
      EmployeeId: Math.floor(Math.random() * 10000),
      name,
      email,
      phone,
    };
    onSubmit(employee);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone: </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default EmployeeForm;