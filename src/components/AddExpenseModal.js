import React, { useState } from 'react';
import './AddExpenseModal.css';

const AddExpenseModal = ({ onClose, addTransaction }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.random(),
      title,
      amount: parseFloat(amount),
      category,
      date,
    };
    addTransaction(newTransaction);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Expense</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Price"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Select Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="dd/mm/yyyy"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              onFocus={(e) => (e.target.type = 'date')}
              onBlur={(e) => (e.target.type = 'text')}
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Add Expense</button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpenseModal;
