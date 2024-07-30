import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import './ExpenseTracker.css';
import Footer from './Footer'; // Import the Footer component
import OurServices from './OurServices';

// Register the necessary components
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ExpenseTracker = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleAddIncome = () => {
    setIncome(parseInt(income));
  };

  const handleAddExpense = () => {
    setExpenses([...expenses, { name: expenseName, date: expenseDate, amount: parseInt(expenseAmount), paymentMethod }]);
    setExpenseName('');
    setExpenseDate('');
    setExpenseAmount('');
    setPaymentMethod('');
  };

  const handleDeleteExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const balance = income - totalExpenses;

  const pieData = {
    labels: expenses.map((expense) => expense.name),
    datasets: [
      {
        data: expenses.map((expense) => expense.amount),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  };

  const barData = {
    labels: expenses.map((expense) => expense.date),
    datasets: [
      {
        label: 'Expenses',
        data: expenses.map((expense) => expense.amount),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="expense-tracker">
      <div className="main-container">
        <div className="income-section">
          <center>
            <h1 className="fontz">Expense Tracker App</h1>
          </center>
          <div className="income-container">
            <div className="income-inputs">
              <label><b>Income:</b></label>
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="in-come"
                placeholder="Enter Your Income"
              />
              <button onClick={handleAddIncome} className="addInc">ADD</button>
            </div>
            <img
              src="https://img.freepik.com/free-vector/mortgage-isometric-composition-with-images-calculator-bunch-coins-receipt-with-percentage-vector-illustration_1284-66060.jpg?ga=GA1.2.2076563905.1722162675&semt=ais_user"
              alt="Income"
              className="incomeimage image-hover"
            />
          </div>
        </div>

        <div className="expense-input-section">
          <div className="expense-container">
            <div className="expense-inputs">
              <div className="nameDiv">
                <label><b>Name:</b></label>
                <input
                  type="text"
                  value={expenseName}
                  onChange={(e) => setExpenseName(e.target.value)}
                  className="expname"
                  placeholder="Where was the expense made?"
                />
              </div>
              <div className="dateAmt">
                <label><b>Date:</b></label>
                <input
                  type="date"
                  value={expenseDate}
                  onChange={(e) => setExpenseDate(e.target.value)}
                  className="e-date"
                />
                <br />
                <label><b>Amount:</b></label>
                <input
                  type="number"
                  value={expenseAmount}
                  onChange={(e) => setExpenseAmount(e.target.value)}
                  className="amount"
                  placeholder="Enter Amount"
                />
                <br />
                <label><b>Payment Method:</b></label>
                <select 
                  value={paymentMethod} 
                  onChange={(e) => setPaymentMethod(e.target.value)} 
                  className="payment-method"
                >
                  <option value="">Select Payment Method</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>
              </div>
              <button onClick={handleAddExpense} className="add-btn">ADD EXPENSES</button>
            </div>
            <img
              src="https://img.freepik.com/free-photo/rag-doll-transported-wheelbarrow-dollar-symbol-red_1156-286.jpg?ga=GA1.2.2076563905.1722162675&semt=ais_user"
              alt="Expense"
              className="expense image-hover"
            />
          </div>
        </div>

        <div className="table-section">
          <div className="tableList">
            <table>
              <tbody>
                <tr>
                  <td><b>Your Income</b></td>
                  <td>{income}</td>
                  <td></td>
                </tr>
                <tr>
                  <td><b>Name</b></td>
                  <td><b>Date</b></td>
                  <td><b>Expenses</b></td>
                  <td><b>Payment Method</b></td>
                  <td><b>Action</b></td>
                </tr>
                {expenses.map((expense, index) => (
                  <tr key={index}>
                    <td>{expense.name}</td>
                    <td>{expense.date}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.paymentMethod}</td>
                    <td>
                      <button id="delExp" onClick={() => handleDeleteExpense(index)}>Delete</button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td><b>Total Expenses:</b></td>
                  <td>{totalExpenses}</td>
                </tr>
                <tr>
                  <td><b>Balance:</b></td>
                  <td>{balance}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="charts-container">
        <div className="charts">
          <div className="chart-container">
            <h2>Expense Distribution</h2>
            <div className="chart-wrapper">
              <Pie data={pieData} />
            </div>
          </div>
          <div className="chart-container">
            <h2>Expenses Over Time</h2>
            <div className="chart-wrapper">
              <Bar data={barData} />
            </div>
          </div>
        </div>
      </div>
      <div><OurServices /></div>
      <Footer /> {/* Use the Footer component here */}
    </div>
  );
};

export default ExpenseTracker;
