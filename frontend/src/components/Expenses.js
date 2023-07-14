import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API = "http://localhost:4000/";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const fetchData = async (url) => {
    const data = await axios.get(url);
    setExpenses(data.data);
    console.log(data.data)
  };

  useEffect(() => {
    fetchData(API);
  }, []);

  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-75 bg-white rounded p-3">
          <Link to='/create' className="btn btn-success"> Add Expenses +</Link>
          <table className="table">
            <thead>
              <tr>
                <th>Expense Items</th>

                <th>Expense Price</th>

                <th>Expense Description</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((data) => (
                <tr key={data.id}>
                  <td>{data.expenseItem}</td>
                  <td>{data.expensePrice}</td>
                  <td>{data.expenseDescription}</td>
                  <td>
                    <Link to ={`update/${data.id}`} className="btn btn-primary">Update</Link>
                    <button className="btn btn-danger ms-2">Delete</button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Expenses;
