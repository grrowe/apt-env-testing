import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  let test = process.env.TEST || 'NOTHING FOUND'
  let pubTest = process.env.NEXT_PUBLIC_TEST || 'NOTHING FOUND PUBLIC'
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       {test}

       <br />

       {pubTest}
      </div>
    </main>
  )
}
