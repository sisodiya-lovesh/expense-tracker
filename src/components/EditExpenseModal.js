import React, { useState, useEffect } from 'react';

const EditExpenseModal = ({ onClose, transaction, editTransaction }) => {
  const [title, setTitle] = useState(transaction.title);
  const [amount, setAmount] = useState(transaction.amount);
  const [category, setCategory] = useState(transaction.category);
  const [date, setDate] = useState(transaction.date);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTransaction = {
      ...transaction,
      title,
      amount: parseFloat(amount),
      category,
      date,
    };
    editTransaction(updatedTransaction);
  };

  useEffect(() => {
    setTitle(transaction.title);
    setAmount(transaction.amount);
    setCategory(transaction.category);
    setDate(transaction.date);
  }, [transaction]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Expense</h2>
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
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="Food">Food</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Travel">Travel</option>
            </select>
            <input
              type="date"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Save Changes</button>
          <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditExpenseModal;
