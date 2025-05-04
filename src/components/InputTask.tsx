import styles from './InputTask.module.css'
import { PlusCircle } from "@phosphor-icons/react";
import { useState } from 'react';

interface InputTaskProps {
  onAddTask: (content: string) => void;
}

export function InputTask({ onAddTask }: InputTaskProps) {
  const [newTask, setNewTask] = useState('');

  function handleAddTask() {
    if (newTask.trim()) {
      onAddTask(newTask);
      setNewTask('');
    }
  }

  return (
    <div className={styles.inputTask}>
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        className={styles.inputContainer}
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className={styles.createButton} onClick={handleAddTask}>
        Criar
        <PlusCircle size={32} />
      </button>
    </div>
  )
}
