import { useRef } from "react";

const TodoListForm = (props) => {
  const taskDataRef = useRef();
  const addTask = (e) => {
    e.preventDefault();
    const task = taskDataRef.current.value;

    const taskData = {
      task: task,
    };
    props.addTask(taskData);
    taskDataRef.current.value = "";
    // console.log(task);
  };
  return (
    <div className="card">
      <h1>Todo</h1>
      <form onSubmit={addTask}>
        <div>
          <input
            type="text"
            placeholder="enter a task here."
            ref={taskDataRef}
            required
          ></input>
          <button>Add task</button>
        </div>
      </form>
    </div>
  );
};
export default TodoListForm;
