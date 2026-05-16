export const mockTasks = [
  {
    id: 1,
    project_id: 1,
    title: "Pierwsze zadanie",
    description: "Test zadania do seminarium",
    status: "todo",
    project: {
      id: 1,
      name: "Projekt Kanban",
      description: "Projekt do seminarium",
    },
  },
  {
    id: 2,
    project_id: 1,
    title: "Drugie zadanie",
    description: "Przenieść do in progress",
    status: "in_progress",
    project: {
      id: 1,
      name: "Projekt Kanban",
      description: "Projekt do seminarium",
    },
  },
  {
    id: 3,
    project_id: 1,
    title: "Trzecie zadanie",
    description: "Już zrobione",
    status: "done",
    project: {
      id: 1,
      name: "Projekt Kanban",
      description: "Projekt do seminarium",
    },
  },
];