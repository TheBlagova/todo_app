import Button from "../UI/Button";
import styles from "./TodoActions.module.css";
import { RiDeleteBin2Fill, RiRefreshLine } from "react-icons/ri";
function TodoActions({ resetTodo, deleteCompletedTodo, compleatedTodoExsist }) {
  return (
    <div className={styles.actionsBtn}>
      <Button title="Reset Todods" onClick={resetTodo}>
        <RiRefreshLine className={styles.actionsIcon} />
      </Button>
      <Button
        disabled={!compleatedTodoExsist}
        title="Clear Compleated Todods"
        onClick={deleteCompletedTodo}
      >
        <RiDeleteBin2Fill className={styles.actionsIcon} />
      </Button>
    </div>
  );
}
export default TodoActions;
