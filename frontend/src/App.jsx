import { useState } from "react";
import { mockTasks } from "./data/mockTasks";
import KanbanBoard from "./components/KanbanBoard";
import TaskForm from "./components/TaskForm";
import "./index.css";

export default function App() {
  const [tasks, setTasks] = useState(mockTasks);

  const addTask = (newTask) => {
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...newTask,
        project: {
          id: 1,
          name: "Projekt Kanban",
          description: "Projekt do seminarium",
        },
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const handleDragEndTask = (taskId, newStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Kanban Project</h1>
        <p>Frontend MVP w React</p>
      </header>

      <TaskForm onAddTask={addTask} />
      <KanbanBoard
        tasks={tasks}
        onDeleteTask={deleteTask}
        onDragEndTask={handleDragEndTask}
      />
    </div>
  );
}