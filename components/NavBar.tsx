import Link from "next/link"
import { useRouter } from "next/router"
import styles from './NavBar.module.css'

export default function NavBar() {
  const router = useRouter();
  // console.log('router.pathname: ', router.pathname)
  return(
    <nav>
      <Link href="/">
        <a className={`${styles.link} ${router.pathname === '/' ? styles.active : ''}`}>Home: H</a>
      </Link>
      <Link href="/about">
        <a className={`${styles.link} ${router.pathname === '/about' ? styles.active : ''}`}>About: t</a>
      </Link>
    </nav>
  )
}