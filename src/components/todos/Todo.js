import { RiCalendarTodoFill } from "react-icons/ri";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import styles from "./Todo.module.css";
function Todo({ todo, deleteTodo, doneTodo }) {
  return (
    <li
      className={`${styles.todoItem} ${
        todo.isCompleate ? styles.todoIsComplite : ""
      }`}
    >
      <RiCalendarTodoFill className={styles.todoIconCal} />
      <p className={styles.todoText}>{todo.text}</p>
      <RiDeleteBin2Fill
        className={styles.todoIconTrash}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck
        className={styles.todoIconDone}
        onClick={() => doneTodo(todo.id)}
      />
    </li>
  );
}
export default Todo;
