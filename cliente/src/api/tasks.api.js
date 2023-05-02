import axios from 'axios'

const URL =
    process.env.NODE_ENV === "production"
        ? import.meta.env.VITE_BACKEND_URL
            : "http://127.0.0.1:8000";

const urlApi = axios.create({
    //baseURL: 'http://127.0.0.1:8000/api/tasks/' funciona en desarrollo
    baseURL: `${URL}/api/tasks/`, //para producion y desarrollo
})

//esto pide los datos al backend
export const getAllTasks = () => {
    return urlApi.get('/')
}

export const getTask = (id) => {
    return urlApi.get(`/${id}`)
}

export const createTask = (task) =>{
    return urlApi.post('/',task) //pasarle los datos a enviar
}

export const deleteTask = (id) =>{
    return urlApi.delete(`/${id}`)
}

export const updateTask = (id,task) =>{
    return urlApi.put(`/${id}/`,task)
}