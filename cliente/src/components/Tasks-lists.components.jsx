import { useEffect, useState } from "react"
import {getAllTasks} from '../api/tasks.api'
import { TaskCard } from "./task-cards.components";

export function TasksList(){

    const [tasks, setTasks] = useState([]); //la funcion useState permite guardar los datos

    //esta funcion se ejecuta apenas se inicie la pagina
    useEffect(()=>{
        //funcion para ejecutar de manera asincrona
        async function load(){
            const res =  await getAllTasks() //el async y el await van juntos para especificar que se ejecute a pesar de que haya otra operacion
            setTasks(res.data) //definimos que solo queremos guardar los datos que obtenemos 
        }
        load();
    },[])

    return(
        //hacemos un mapeo de todas las tareas para mostrarlas
        <div className="grid grid-cols-3 gap-3">
            {tasks.map(task =>(
                <TaskCard key={task.id} task={task}></TaskCard>
            ))}
        </div>
    )
}