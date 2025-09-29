import React from 'react';
import { Link } from 'react-router-dom';

function EmployeeList({ employees }) {
  if (!employees || employees.length === 0) {
    return <div className="no-employees">No employees found. Add one above!</div>;
  }

  return (
    <div className="employee-list">
      <h1>Employee Directory</h1>
      <ul className="employee-grid">
        {employees.map((employee) => (
          <li key={employee.id} className="employee-card">
            <Link to={`/employees/${employee.id}`} className="employee-link">
              {employee.name}
            </Link>
            <p className="employee-email">{employee.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;