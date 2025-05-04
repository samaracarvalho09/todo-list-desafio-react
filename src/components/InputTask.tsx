import styles from './InputTask.module.css'
import { PlusCircle } from "@phosphor-icons/react";

export function InputTask() {

  return (
    <div className={styles.inputTask}>
      {/* <div className={styles.inputContainer}> */}
        <input 
        type="text" 
        placeholder='Adicione uma nova tarefa'
        className={styles.inputContainer}
        />
      {/* </div> */}
      <button className={styles.createButton}>
        Criar
        <PlusCircle size={32} />
      </button>
    </div>
  )
}
