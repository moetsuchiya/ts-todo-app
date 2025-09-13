// src/components/AddTask.tsx
import type { FormEvent } from "react";
import "./AddTask.css";

type AddTaskProps = {
  inputTask: string;
  setInputTask: (task: string) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const AddTask = ({ 
  inputTask, 
  setInputTask, 
  handleSubmit 
}: AddTaskProps) => {
  return (
    <div className="add-task-container">
      <form onSubmit={handleSubmit} className="add-task-form">
        <input
          type="text"
          className="task-input"
          placeholder="新しいタスクを追加"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <button 
          type="submit"
          className="submit-button"
          disabled={inputTask.length === 0}
        >
          追加
        </button>
      </form>
    </div>
  );
};

export default AddTask;