import styles from "./TodoList.module.css";
import Todo from "./Todo";

function TodoList({ todos, deleteTodo, doneTodo }) {
  return (
    <ul className={styles.todoList}>
      {!todos.length && (
        <h2 className={styles.listTitle}>Todo list is empty</h2>
      )}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          doneTodo={doneTodo}
        />
      ))}
    </ul>
  );
}
export default TodoList;
