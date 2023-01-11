import ChildComponent from '../src/components/childComponent'
import styles from '../src/components/components.module.css'

export default function App() {
  return (
    <div>
      <p className={styles.purple}>This paragraph is purple!</p>
      <ChildComponent number="100" />
    </div>
  )
}
