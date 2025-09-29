import React, { createContext, useState, useEffect } from 'react';

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('employees');
    if (saved) {
      setEmployees(JSON.parse(saved));
    }
  }, []);

  const saveData = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  const addEmployee = (employee) => {
    const newEmployee = { ...employee, id: Date.now() };
    setEmployees(prev => [...prev, newEmployee]);
    saveData();
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContext;