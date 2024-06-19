import React from 'react';

function TopExpenses({ transactions }) {
  // Calculate the sum for each category
  const categories = ['Food', 'Entertainment', 'Travel'];
  const categoryTotals = categories.map((category) => {
    const total = transactions.reduce((sum, transaction) => {
      return transaction.category === category ? sum + transaction.amount : sum;
    }, 0);
    return { category, total };
  });

  return (
    <div className="top-expenses">
      <h2>Top Expenses</h2>
      {categoryTotals.map((category) => (
        <div key={category.category} className="top-expense-item">
          <span>{category.category}</span>
          <div className="expense-bar" style={{ width: `${category.total}%` }}></div>
        </div>
      ))}
    </div>
  );
}

export default TopExpenses;
