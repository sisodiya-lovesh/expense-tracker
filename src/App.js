import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import RecentTransactions from './components/RecentTransactions';
import TopExpenses from './components/TopExpenses';
import AddExpenseModal from './components/AddExpenseModal';
import EditExpenseModal from './components/EditExpenseModal';

function App() {
  const [walletBalance, setWalletBalance] = useState(4500);
  const [expenses, setExpenses] = useState(500);
  const [transactions, setTransactions] = useState([
    { id: 1, title: 'Samosa', amount: 150, category: 'Food', date: 'March 20, 2024' },
    { id: 2, title: 'Movie', amount: 300, category: 'Entertainment', date: 'March 21, 2024' },
    { id: 3, title: 'Auto', amount: 50, category: 'Travel', date: 'March 22, 2024' },
    { id: 4, title: 'Groceries', amount: 200, category: 'Food', date: 'March 23, 2024' },
    { id: 5, title: 'Bus', amount: 30, category: 'Travel', date: 'March 24, 2024' },
    { id: 6, title: 'Coffee', amount: 120, category: 'Food', date: 'March 25, 2024' },
  ]);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 3;

  const calculateExpenses = (transactions) => {
    return transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  };

  const addTransaction = (transaction) => {
    const newTransactions = [...transactions, transaction];
    setTransactions(newTransactions);
    setExpenses(calculateExpenses(newTransactions));
  };

  const editTransaction = (updatedTransaction) => {
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === updatedTransaction.id ? updatedTransaction : transaction
    );
    setTransactions(updatedTransactions);
    setExpenses(calculateExpenses(updatedTransactions));
    setShowEditModal(false);
  };

  const deleteTransaction = (id) => {
    const remainingTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(remainingTransactions);
    setExpenses(calculateExpenses(remainingTransactions));
  };

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Header />
      <Balance
        walletBalance={walletBalance}
        setWalletBalance={setWalletBalance}
        expenses={expenses}
        setExpenses={setExpenses}
        addTransaction={addTransaction}
        transactions={transactions}
      />
      <div className="content">
        <RecentTransactions
          transactions={currentTransactions}
          onEdit={(transaction) => { setCurrentTransaction(transaction); setShowEditModal(true); }}
          onDelete={deleteTransaction}
          transactionsPerPage={transactionsPerPage}
          totalTransactions={transactions.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        <TopExpenses transactions={transactions} />
      </div>
      {showExpenseModal && <AddExpenseModal onClose={() => setShowExpenseModal(false)} addTransaction={addTransaction} />}
      {showEditModal && <EditExpenseModal onClose={() => setShowEditModal(false)} transaction={currentTransaction} editTransaction={editTransaction} />}
    </div>
  );
}

export default App;
