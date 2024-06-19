import React, { useState } from 'react';
import './Balance.css';
import AddExpenseModal from './AddExpenseModal';
import AddIncomeModal from './AddIncomeModal';
import ExpenseSummary from './ExpenseSummary';

function Balance({ walletBalance, setWalletBalance, expenses, setExpenses, addTransaction, transactions }) {
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showIncomeModal, setShowIncomeModal] = useState(false);

  const addIncome = (income) => {
    setWalletBalance(walletBalance + income.amount);
  };

  return (
    <div className="balance-container">
      <div className="balance-item">
        <h2>Wallet Balance: ₹{walletBalance}</h2>
        <button onClick={() => setShowIncomeModal(true)} className="add-income-button">+ Add Income</button>
        {showIncomeModal && <AddIncomeModal onClose={() => setShowIncomeModal(false)} addIncome={addIncome} />}
      </div>
      <div className="balance-item">
        <h2>Expenses: ₹{expenses}</h2>
        <button onClick={() => setShowExpenseModal(true)} className="add-expense-button">+ Add Expense</button>
        {showExpenseModal && <AddExpenseModal onClose={() => setShowExpenseModal(false)} addTransaction={addTransaction} />}
      </div>
      <div className="expense-summary-container">
        <ExpenseSummary transactions={transactions} />
      </div>
    </div>
  );
}

export default Balance;
