import { useState } from 'react';
import type { FormEvent } from 'react';
import './App.css';
import Title from './components/Title';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import type { Task } from './type';

function App() {
  const [inputTask, setInputTask] = useState('');
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [id, setId] = useState(1);
  // タスク追加処理
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputTask === '') return;

    const newTask: Task = {
      id: id,
      name: inputTask,
      isDone: false,
    };

    setTaskList([...taskList, newTask]);
    setId(id + 1);
    setInputTask('');
  };
  // タスクの完了状態を切り替え
  const handleTaskChange = (taskId: number) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === taskId) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });
    setTaskList(newTaskList);
  };

  // タスクを削除
  const handleRemoveTask = (taskId: number) => {
    const newTaskList = taskList.filter(
      (task) => task.id !== taskId
    );
    setTaskList(newTaskList);
  };
  // 完了済みタスクを一括削除
  const handleAllRemoveTask = (tasksToRemove: Task[]) => {
    if (window.confirm(`完了済みタスクをすべて削除してもよいですか？`)) {
      setTaskList(tasksToRemove);
    }
  };
  return (
    <>
      <div className="todo">
        <Title str="ToDo App" />
        <AddTask
          inputTask={inputTask}
          setInputTask={setInputTask}
          handleSubmit={handleSubmit}
        />
        <TaskList
          taskList={taskList}
          handleTaskChange={handleTaskChange}
          handleRemoveTask={handleRemoveTask}
          handleAllRemoveTask={handleAllRemoveTask}
        />
      </div>
    </>
  );
}

export default App;