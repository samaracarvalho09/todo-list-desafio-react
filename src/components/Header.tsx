import styles from './Header.module.css'
import rocketIcon from '../assets/rocket.svg'
export function Header() {

  return (
    <div className={styles.header}>

      <img src={rocketIcon} alt="Rocket" />
      <span className={styles.textTo}>to<span className={styles.textDo}>do</span></span>
    </div>
  )
}