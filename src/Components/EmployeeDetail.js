import React from 'react';
import { useParams, Link } from 'react-router-dom';

const EmployeeDetail = ({ employees }) => {
  const { id } = useParams();
  const employee = employees.find(e => e.id === parseInt(id));
  
  if (!employee) return <div className="error">Employee not found</div>;
  
  return (
    <div className="employee-detail">
      <h1>Employee Profile</h1>
      <div className="detail-card">
        <h2>{employee.name}</h2>
        <p><strong>ID:</strong> {employee.id}</p>
        <p><strong>Position:</strong> {employee.position}</p>
        <p><strong>Department:</strong> {employee.department}</p>
        <Link to="/" className="back-button"></Link>
      </div>
    </div>
  );
};

export default EmployeeDetail;