const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "bhushan123",
  database: "node-complete",
});

app.get("/", (req, res, next) => {
  const sql = "SELECT * FROM expenses";
  db.query(sql, (err, data) => {
    if (err) return res.json("error");
    return res.json(data);
  });
});

app.post("/create", (req, res) => {
  const sql =
    "INSERT INTO expenses (`expenseItem`,`expensePrice`,expenseDescription) VALUES (?)";

  const values = [
    req.body.expenseItem,
    req.body.expensePrice,
    req.body.expenseDescription,
  ];

  db.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.put("/update/:id", (req, res) => {
  const sql =
    "UPDATE expenses set `expenseItem`=? ,`expensePrice`=? , `expenseDescription`=? where id=?";

  const values = [
    req.body.expenseItem,
    req.body.expensePrice,
    req.body.expenseDescription,
  ];

  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.listen(4000, () => {
  console.log("Listening");
});
