import React from 'react'
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
//CSS
import styles from'./TaskForm.module.css'
//INTERFACE
import { ITask } from '../interfaces/Task';

interface Props{
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    task?: ITask | null
    handleUpdate?(id: number, titulo: string, dificudade: number): void
}

const TaskForm = ({btnText, taskList, setTaskList, task, handleUpdate}: Props) => {
    const [id, setId] = useState<number>(0)
    const [titulo, setTitle] = useState<string>("")
    const [dificudade, setDificudade] = useState<number>(0)
    useEffect(() => {
        if(task){
            setId(task.id)
            setTitle(task.titulo)
            setDificudade(task.dificudade)
        }
    }, [task])
    
    const addTaskHandnler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(handleUpdate);
        if(handleUpdate){
            console.log(titulo);
            console.log(dificudade);
            handleUpdate(id, titulo, dificudade)
        }else{
            const id = Math.floor(Math.random() * 1000)
            const newTask: ITask = {id, titulo, dificudade}
            setTaskList!([...taskList, newTask])
            setTitle("")
            setDificudade(0)
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "titulo"){
            setTitle(e.target.value)
        }else{
            setDificudade(parseInt(e.target.value))
        }
    }
  return (<form onSubmit={addTaskHandnler} className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor="titulo">Titulo:</label>
            <input 
            type="text"
            name='titulo'
            placeholder='Titulo da tarefa:' 
            onChange={handleChange} 
            value={titulo}
            />
        </div>
        <div className={styles.input_container}>
            <label htmlFor="dificudade">Dificudade:</label>
            <input 
            type="number"
            name='dificudade' 
            placeholder='Dificudade da tarefa:' 
            onChange={handleChange} 
            value={dificudade}
            />
        </div>
        <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm