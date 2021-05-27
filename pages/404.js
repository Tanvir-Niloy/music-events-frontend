import Link from 'next/link'
import styles from '../styles/404.module.css'
import Layout from "../components/Layout";
import {FaExclamationTriangle} from 'react-icons/fa'


export default function NotFoundPage() {
          return (
                    <Layout title='Page Not Found'>
                         <div className={styles.error}>
                            <h1><FaExclamationTriangle/> 404</h1>    
                            <h4>Sorry,there is Nothing Here!</h4>
                            <Link href='/'>Go back Home</Link>   
                         </div>     
                    </Layout>
          )
}