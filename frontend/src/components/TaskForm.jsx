import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    await onAddTask({
      project_id: 1,
      title,
      description,
      status: "todo",
    });

    setTitle("");
    setDescription("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tytuł zadania"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Opis zadania"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Dodaj zadanie</button>
    </form>
  );
}