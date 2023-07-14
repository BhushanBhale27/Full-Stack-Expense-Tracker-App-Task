import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expenses from "./components/Expenses";
import CreateExpenses from "./components/CreateExpenses";
import UpdateExpenses from "./components/UpdateExpenses";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Expenses />}></Route>
          <Route path="/create" element={<CreateExpenses />}></Route>
          <Route path="/update/:id" element={<UpdateExpenses />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
