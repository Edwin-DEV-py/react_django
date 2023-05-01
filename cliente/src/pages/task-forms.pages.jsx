import {useForm} from 'react-hook-form'
import { createTask, deleteTask,updateTask,getTask } from '../api/tasks.api';
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react';
import { toast } from 'react-hot-toast'

export function TasksFormsPage(){

    const {register, handleSubmit, formState:{errors}, setValue} = useForm(); //biblioteca para validar formularios
    
    const navigate = useNavigate(); //para las url

    const param = useParams(); //para obtener los parametros de la url
    
    //acciones dependiendo de la url al enviar el formualrio
    const onSubmit = handleSubmit( async data => {
        if (param.id){
            await updateTask(param.id, data) //para actualizar la tarea
            toast.success('Tarea actualizada',{
                position: 'bottom-right',
                style:{
                    background:"#101010",
                    color: 'white'
                }
            })
        }else{
            await createTask(data); //para crear la tarea
            toast.success('Tarea creada',{
                position: 'bottom-right',
                style:{
                    background:"#101010",
                    color: 'white'
                }
            })
        }
        navigate('/tasks') //redireccionamos al home al crear la tarea
    })

    //obtenner datos para el formulario
    useEffect(()=>{
        async function loadTask(){
            if (param.id){
                const res = await getTask(param.id)
                setValue('title', res.data.title)
                setValue('description', res.data.description)
            }
        }
        loadTask()
    },[])

    return(
        <div>
            <form action="" onSubmit={onSubmit}>
                <input type="text" className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' 
                placeholder="Title" {...register("title", {required:true})} />
                {errors.title && <span>El campo es requerido</span>} {/*para mostrar errores en el html*/}
                <textarea rows="3" className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' 
                placeholder="Descripcion" {...register("description", {required:true})}></textarea>
                {errors.description && <span>El campo es requerido</span>}
                <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Save</button>
            </form>
            {param.id &&( 
            <div className='flex justify-end'>
            <button className='bg-red-500 p-3 rounded-lg w-48 mt-3' 
                onClick={async()=>{
                const accept = window.confirm('Estas seguro?');
                if(accept){
                    await deleteTask(param.id);
                    toast.success('Tarea eliminada',{
                        position: 'bottom-right',
                        style:{
                            background:"#101010",
                            color: 'red'
                        }
                    });
                    navigate('/tasks')
                }
            }}>Delete</button> </div>)} {/*para saber si en la url esta el id de la tarea*/}
        </div>
    )
}