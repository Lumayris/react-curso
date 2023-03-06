import { useContext, useState } from "react";
import {TaskContext} from '../context/TaskContext'


function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const {createTask} = useContext(TaskContext)



  const handLetSubmit = (e) => {
    e.preventDefault();

    createTask({
        title,
        descripcion
    });

    setTitle('')
    setDescripcion('')
    
  };

  return (
    
      <div className="max-w-md mx-auto">
        <form onSubmit={handLetSubmit} className='bg-slate-800 p-10 mb-4 '>
          <h1 className="text-xxl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Escribe la direccion de la tarea"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
          className="bg-slate300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px3 py-1 text-white">Guardar</button>
      </form>
      </div>
    
  );
}

export default TaskForm;
