import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const CreateExpenses = () => {
  const [expenseItem, setItem] = useState("");
  const [expensePrice, setPrice] = useState("");
  const [expenseDescription, setDescription] = useState("");

  const nevigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/create", { expenseItem, expensePrice, expenseDescription })
      .then((res) => {
        console.log(res);
        nevigate("/");
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-60 bg-white rounded p-3">
          <form onSubmit={submitHandler}>
            <h2 className="align-item-center">Add Your Expenses Here..</h2>
            <div className="mb-2">
              <label className="fw-semibold">Expense Item</label>
              <input
                type="text"
                placeholder="ex. milk"
                className="form-control"
                onChange={(e) => setItem(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label className="fw-semibold">Expense Price</label>
              <input
                type="number"
                placeholder="ex. Rs.65 (only number)"
                className="form-control"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label className="fw-semibold">Expense Description</label>
              <input
                type="text"
                placeholder="ex. bought at morning 8 AM"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button className="btn btn-success">Submit Expense</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateExpenses;
