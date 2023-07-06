import React, { Fragment } from "react";
import "./App.css";
// Components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
// import EditTodo from "./components/EditTodo";

function App() {
  return (
    <div className="container">
      <Fragment>
        <InputTodo />
        <ListTodos />
      </Fragment>
    </div>
  );
}

export default App;
