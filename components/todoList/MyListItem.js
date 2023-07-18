import { useState } from "react";
import styles from "./MyListItem.module.css";

function MyListItem(props) {
  const [completed, setCompleted] = useState(props.completed);

  const toggleCompleted = async () => {
    setCompleted(!completed);
    console.log(props.id);
    console.log(completed);

    try {
      const response = await fetch("/api/tasks", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: completed, taskId: props.id }),
      });
      if (!response.ok) {
        throw new Error("Failed to update task status.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    console.log(props.id);
    try {
      const response = await fetch(`/api/delete-task`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ taskId: props.id }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete task.");
      }
      // Refresh the page after successful deletion
      // window.location.reload();

       // Remove the deleted task from the tasks array
       props.onDelete(props.id);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <li className={completed ? styles.completed : ""}>
        <div className={styles.taskContainer}>
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              checked={completed}
              onChange={toggleCompleted}
            />
          </div>
          <h3 className={styles.taskText}>{props.task}</h3>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </li>
    </div>
  );
}

export default MyListItem;
