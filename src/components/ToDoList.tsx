import styles from './ToDoList.module.css'

import Checked from '../assets/check.svg?react'
import NoChecked from '../assets/noCheck.svg?react'
import { useState } from 'react'
import { Trash} from '@phosphor-icons/react'

type Task = {
  id: number;
  content: string;
}

export function ToDoList() {
  const [checked, setChecked] = useState(false);
  // const [taskList, setTaskList] = [{ id: 2, checked: false, content: "suhagsayas" }]

  function toggleChecked() {
    setChecked(prev => !prev);
  }

  console.log(checked)

  return (
    <>
    <div>
      <div>
        <span>Tarefas criadas</span>
        <>5</>
      </div>
      <div><span>
      Concluídas</span>
      <span>0</span>
      </div>
    </div>
    <div>
      <button onClick={toggleChecked}>

        {checked ?
          <Checked />
          : <NoChecked />
        }
      </button>
      <p>huhusauhasuhs</p>
      <Trash size={32} />

    </div>
    </>
  )
}