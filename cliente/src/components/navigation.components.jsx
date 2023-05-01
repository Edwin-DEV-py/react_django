import {Link} from 'react-router-dom'

//funcion para mostrar la barra de navegacion
export function Navigation(){
    return(
        //la etiqueta link remplaza al a para no refrescar la pagina (linea 9)
        <div className='flex justify-between py-3'>
            <Link to="/"><h1 className='font-bold text-3xl mb-4'>Task App</h1></Link>
            <button className='bg-indigo-500 px-3 py-2 rounded-lg'>
                <Link to="/task-create">Create task</Link>
            </button>
        </div>
    )
}