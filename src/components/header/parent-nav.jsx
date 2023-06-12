
import styles from '../../../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function ParentNav() {
  const router = useRouter()
  const path = router.pathname
  return (
    <div className={styles.container}>

      <nav className={styles.parents_nav}>
        <ul>
          <Link href={'/parents/home'}><li className={path.indexOf("/parents/home") !== -1 ? styles.highlight : ""}>Home</li></Link>
          <Link href={'/parents/exam-prep'}> <li className={path.indexOf("/parents/exam-prep") !== -1 ? styles.highlight : ""}>Exam Prep</li></Link>
          <Link href={'/parents/tutoring'} > <li className={path.indexOf("/parents/tutoring") !== -1 ? styles.highlight : ""}>Tutoring</li></Link>
          <Link href={'/parents/extra-curricular'}><li className={path.indexOf("/parents/extra-curricular") !== -1 ? styles.highlight : ""}>Extra Curricular</li></Link>

        </ul>
      </nav>



    </div>
  )
}
