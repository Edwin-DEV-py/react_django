import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {TasksPage} from './pages/tasks.pages'
import {TasksFormsPage} from './pages/task-forms.pages'
import {Navigation} from './components/navigation.components'
import { Toaster } from 'react-hot-toast'

function App(){
  return(
    <BrowserRouter>
    <div className="container mx-auto">
    <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Navigate to="/tasks"/>}/> {/*Cambia de pagina hacia donde especifique*/}
        <Route path="/tasks" element={<TasksPage/>} /> {/*Especificamos que se mostrara cuando se vaya a esa ruta*/}
        <Route path="/task-create" element={<TasksFormsPage/>} />
        <Route path="/tasks/:id" element={<TasksFormsPage/>} /> {/*Ruta para editar la tarea*/}
      </Routes>
      <Toaster></Toaster>
    </div>
    </BrowserRouter>
  )
}

export default App