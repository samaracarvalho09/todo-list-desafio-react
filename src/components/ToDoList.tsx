import styles from './ToDoList.module.css'
import Checked from '../assets/check.svg?react'
import NoChecked from '../assets/noCheck.svg?react'
import { useEffect, useState } from 'react'
import { Trash } from '@phosphor-icons/react'
import { InputTask } from './InputTask';
import { v4 as uuidv4 } from 'uuid';
import Clipboard from '../assets/Clipboard.png'

type Task = {
  id: string;
  content: string;
  isChecked: boolean;
}

export function ToDoList() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  // Função para alternar o status de concluído de uma tarefa
  useEffect(() => {
    console.log(taskList, 'list')
  })
  function toggleChecked(taskId: string) {
    setTaskList(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  }

  // Função para excluir uma tarefa
  function deleteTask(taskId: string) {
    setTaskList(prevTasks => prevTasks.filter(task => task.id !== taskId));
  }

  function addTask(content: string) {
    setTaskList(prevTasks => [
      ...prevTasks,
      { id: uuidv4(), content, isChecked: false }
    ]);
  }

  // Contadores de tarefas
  const tasksCreated = taskList.length;
  const tasksCompleted = taskList.filter(task => task.isChecked).length;

  return (
    <div className={styles.contentTasks}>
      <>
        <div className={styles.toDoList}>
          <InputTask onAddTask={addTask} />
        </div>
        <div className={styles.header}>
          <div>
            <span className={styles.createdTask}>Tarefas criadas</span>
            <span>{tasksCreated}</span>
          </div>
          <div>
            <span className={styles.fineshedTask}>Concluídas</span>
            <span>{tasksCompleted}</span>
          </div>
        </div>
      </>
      {taskList?.length > 0 ?
        <div className={styles.taskList}>
          {taskList.map(task => (
            <div key={task.id} className={styles.taskItem}>
              <button onClick={() => toggleChecked(task.id)}>
                {task.isChecked ? 
                <Checked className={styles.checkedIcon}
                /> : <NoChecked className={styles.noCheckedIcon} />}
              </button>
              <p className={task.isChecked ? styles.checked : ''}>{task.content}</p>
                <Trash 
                size={32} 
                onClick={() => deleteTask(task.id)}
                className={styles.deleteButton}
                />
            </div>
          ))}
        </div>
        :
        <div className={styles.emptyTaskList}>
          <img src={Clipboard} alt="" />
          <div className={styles.textEmptyTaskList}>
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      }
    </div>
  )
}
