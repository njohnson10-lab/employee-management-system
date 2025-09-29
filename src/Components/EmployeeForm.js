import React, { useState } from 'react';

function EmployeeForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const employee = {
      id: Date.now(), // Use same ID pattern as App.js
      name,
      email,
      phone
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
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone: </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;