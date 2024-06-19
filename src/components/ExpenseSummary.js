import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

function ExpenseSummary({ transactions }) {
  const categoryTotals = transactions.reduce((acc, transaction) => {
    acc[transaction.category] = (acc[transaction.category] || 0) + transaction.amount;
    return acc;
  }, {});

  const data = Object.keys(categoryTotals).map(category => ({
    name: category,
    value: categoryTotals[category],
    color: getColorByCategory(category),
  }));

  function getColorByCategory(category) {
    switch (category) {
      case 'Food':
        return '#7C4DFF';
      case 'Entertainment':
        return '#FF4081';
      case 'Travel':
        return '#FFC107';
      default:
        return '#000000';
    }
  }

  return (
    <div className="expense-summary">
      <PieChart width={200} height={200}>
        <Pie data={data} dataKey="value" outerRadius={80}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <div className="legend">
        {data.map((entry) => (
          <div key={entry.name} className="legend-item">
            <span className="legend-color" style={{ backgroundColor: entry.color }}></span>
            <span>{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseSummary;
