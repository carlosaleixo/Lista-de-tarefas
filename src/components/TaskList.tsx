import React from 'react'
//CSS
import styles from './taskList.module.css'
// INTERFACE
import { ITask } from '../interfaces/Task'

interface Props{
  taskList: ITask[]
  handleDelete(titulo: string): void
  handleEdit(task: ITask): void
}

const TaskList = ({taskList, handleDelete, handleEdit }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task, index) =>(
          <div key={index} className={styles.task}>
            <div className={styles.details}>
             <h4>{task.titulo}</h4>
              <p>Dificudade: {task.dificudade}</p>
            </div>
            <div className={styles.actions}>
              <i className='bi bi-pencil' onClick={() => handleEdit(task)}></i>
              <i className='bi bi-trash' onClick={() => {
                handleDelete(task.titulo);}}></i>
            </div>
          </div>
        ))
      ):(
        <p>Nao ha tarefas cadastradas</p>
      )}
    </>
  )
}

export default TaskList