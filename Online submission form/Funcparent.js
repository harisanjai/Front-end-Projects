import React, { useState } from 'react';
import './App.css';
import TableComponent from './TableComponent';

const Funcparent = () => {
  const [name, updateName] = useState('');
  const [address, updateAddress] = useState('');
  const [pincode, updatePincode] = useState('');
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const onsubmit = () => {
    if (name === '' && address === '' && pincode === '') {
      alert('Name, Address, and Pincode are required');
      return;
    } else if (name === '' && address === '') {
      alert('Name and Address are required');
      return;
    } else if (address === '' && pincode === '') {
      alert('Address and Pincode are required');
      return;
    } else if (name === '' && pincode === '') {
      alert('Name and Pincode are required');
      return;
    } else if (name === '') {
      alert('Name is required');
      return;
    } else if (address === '') {
      alert('Address is required');
      return;
    } else if (pincode === '') {
      alert('Pincode is required');
      return;
    }

    if (editIndex !== null) {
      const updatedData = data.map((item, index) =>
        index === editIndex ? { name, address, pincode } : item
      );
      setData(updatedData);
      setEditIndex(null);
    } else {
      setData([...data, { name, address, pincode }]);
    }

    updateName('');
    updateAddress('');
    updatePincode('');
  };

  const handleEdit = (index) => {
    const item = data[index];
    updateName(item.name);
    updateAddress(item.address);
    updatePincode(item.pincode);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    if (index === editIndex) {
      setEditIndex(null);
    }

    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);

    if (editIndex > index) {
      setEditIndex(editIndex - 1);
    }
  };

  return (
    <>
      <div className='primarydiv'>
        <div className='div'>
          Name: <input value={name} onChange={(e) => updateName(e.target.value)} />
          Address: <input value={address} onChange={(e) => updateAddress(e.target.value)} />
          Pincode: <input value={pincode} onChange={(e) => updatePincode(e.target.value)} />
          <br />
          <button onClick={onsubmit}>{editIndex !== null ? 'Update' : 'Submit'}</button>
        </div>
      </div>
      <TableComponent data={data} onEdit={handleEdit} onDelete={handleDelete} />
    </>
  );
};

export default Funcparent;
