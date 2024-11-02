import { useState } from "react";
import styles from "./TodoForm.module.css";
import Button from "../UI/Button";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const onSubmitHendler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHendler}>
      <input
        className={styles.formInput}
        type="text"
        name="text"
        placeholder="Enter new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <Button type="submit" title="Submit">
        Submit
      </Button>
    </form>
  );
}
export default TodoForm;
