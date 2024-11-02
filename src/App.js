import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./normalize.css";
import "./App.css";
import TodoForm from "./components/todos/TodoForm";
import TodoList from "./components/todos/TodoList";
import TodoActions from "./components/todos/TodoActions";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleate: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const doneTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleate: !todo.isCompleate }
          : { ...todo };
      })
    );
  };

  const resetTodoHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodoHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleate));
  };

  const compleatedTodoCounts = todos.filter((todo) => todo.isCompleate).length;

  return (
    <div className="App">
      <h1 className="appTitle">Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodoActions
          compleatedTodoExsist={!!compleatedTodoCounts}
          resetTodo={resetTodoHandler}
          deleteCompletedTodo={deleteCompletedTodoHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        doneTodo={doneTodoHandler}
      />
      {compleatedTodoCounts > 0 && (
        <h2 className="appSubTitle">{`You have completed ${compleatedTodoCounts} ${
          compleatedTodoCounts > 1 ? "todos" : "todo"
        }`}</h2>
      )}
    </div>
  );
}

export default App;
