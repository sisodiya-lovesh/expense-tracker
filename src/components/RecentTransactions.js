import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

function RecentTransactions({ transactions, onEdit, onDelete, transactionsPerPage, totalTransactions, paginate, currentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTransactions / transactionsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="recent-transactions">
      <h2>Recent Transactions</h2>
      {transactions.map((transaction) => (
        <div key={transaction.id} className="transaction-item">
          <div>
            <h3>{transaction.title}</h3>
            <p>{transaction.date}</p>
          </div>
          <div>
            <span>₹{transaction.amount}</span>
            <button className="edit-button btn btn-primary" onClick={() => onEdit(transaction)}><FaEdit /></button>
            <button className="delete-button btn btn-danger" onClick={() => onDelete(transaction.id)}><FaTrash /></button>
          </div>
        </div>
      ))}
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn btn-secondary"
        >
          &lt;
        </button>
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`btn ${currentPage === number ? 'btn-danger' : 'btn-primary'}`}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === pageNumbers.length}
          className="btn btn-secondary"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default RecentTransactions;
