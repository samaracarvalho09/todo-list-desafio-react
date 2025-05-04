
import './App.css'
import './global.css'
import { Header } from './components/Header'
import { InputTask } from './components/InputTask'
import { ToDoList } from './components/ToDoList'

function App() {

  return (
    <>
    <div className='app'>

      <Header />
      <InputTask />
      <ToDoList />
    </div>
    </>
  )
}

export default App
