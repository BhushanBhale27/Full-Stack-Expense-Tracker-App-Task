import React, { useState } from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom"

const UpdateExpenses = () => {
  const [expenseItem, setItem] = useState("");
  const [expensePrice, setPrice] = useState("");
  const [expenseDescription, setDescription] = useState("");

  const {id} = useParams()

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/update/"+id , { expenseItem, expensePrice, expenseDescription })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-60 bg-white rounded p-3">
          <form onSubmit={submitHandler}>
            <h2 className="align-item-center">Update Expense</h2>
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
            <button className="btn btn-success">Update Expense</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateExpenses;
