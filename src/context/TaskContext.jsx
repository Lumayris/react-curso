import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

// nombre del contexto
export const TaskContext = createContext();

// componente que los va a englobar a todos
export function TaskContextProvider(props) {
  // esto es un useState
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        descripcion: task.descripcion,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  //   Este es el useEffect
  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <>
      {/* creacion del componente */}
      <TaskContext.Provider
        value={{
          tasks,
          deleteTask,
          createTask,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    </>
  );
}
