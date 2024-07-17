import React, { useState }  from 'react';
//COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';
//CSS
import styles from "./App.module.css";
//INTERFACES
import { ITask } from './interfaces/Task';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (titulo: string): void => {
    setTaskList(
      taskList.filter((task) => {
        return task.titulo !== titulo;
      })
    )
  }

  const hideOrShowModal = (display: boolean) =>{
    const modal = document.getElementById("modal")
    if(display){
      modal!.classList.remove('hide')
    }else{
      modal!.classList.add('hide')
    }
  }

  const editTask = (task: ITask):void => {
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }

const updateTask = (id: number, titulo: string, dificudade: number) => {
  const updatedTask: ITask = {id, titulo, dificudade}

  const updatedItems = taskList.map((task) => {
    return task.id === updatedTask.id ? updatedTask : task
  })
  setTaskList(updatedItems)
  hideOrShowModal(false)
}

  return (
  <div>
    <Modal titulo='Editar tarefa' children={
      <TaskForm 
    btnText='Editar tarefa' 
    taskList={taskList} 
    task={taskToUpdate}
    handleUpdate={updateTask}/>
    }/>
    <Header/>
    <main className={styles.main}>
      <div>
        <h2>O que voce vai fazer?</h2>
        <TaskForm 
        btnText="Criar tarefa" 
        taskList={taskList} 
        setTaskList={setTaskList}/>
      </div>
      <div>
        <h2>Suas tarefas</h2>
        <TaskList 
        taskList={taskList} 
        handleDelete={deleteTask} 
        handleEdit ={editTask}/>
      </div>
    </main>
    <Footer/>
  </div>);
}

export default App;
