// src/components/TaskList.tsx
import type { Task } from "../type";
import "./TaskList.css";

type TaskListProps = {
  taskList: Task[];
  handleTaskChange: (id: number) => void;
  handleRemoveTask: (id: number) => void;
  handleAllRemoveTask: (tasks: Task[]) => void;
};

const TaskList = ({
  taskList,
  handleTaskChange,
  handleRemoveTask,
  handleAllRemoveTask,
}: TaskListProps) => {
  return (
    <div className="task-list-container">
      <ul className="task-list">
        {taskList.length === 0 ? (
          <p className="empty-message">タスクを追加してください</p>
        ) : (
          taskList.map((task) => (
            <li key={task.id} className="task-item">
              <input
                type="checkbox"
                className="task-checkbox"
                checked={task.isDone}
                onChange={() => handleTaskChange(task.id)}
              />
              <span
                className={`task-name ${task.isDone ? "completed" : ""}`}
              >
                {task.name}
              </span>
              <button
                className="remove-button"
                onClick={() => handleRemoveTask(task.id)}
                aria-label="タスクを削除"
              >
                ☓
              </button>
            </li>
          ))
        )}
      </ul>
      
      {taskList.some(task => task.isDone) && (
        <button
          className="delete-all-button"
          onClick={() => handleAllRemoveTask(taskList.filter(task => task.isDone))}
        >
          完了したタスクを全て削除
        </button>
      )}
    </div>
  );
};

export default TaskList;            