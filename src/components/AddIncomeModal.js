import React, { useState } from 'react';
import './AddIncomeModal.css';

const AddIncomeModal = ({ onClose, addIncome }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newIncome = {
      id: Math.random(),
      amount: parseFloat(amount),
    };
    addIncome(newIncome);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Balance</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="number"
              placeholder="Income Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">Add Balance</button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddIncomeModal;
