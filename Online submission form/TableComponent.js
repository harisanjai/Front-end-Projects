import React from 'react';

const TableComponent = ({ data, onEdit, onDelete }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Pincode</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td>{item.pincode}</td>
            <td>
              <button onClick={() => onEdit(index)}>Edit</button>
              <button onClick={() => onDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
