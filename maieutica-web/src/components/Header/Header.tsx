import styles from './Header.module.css'
import logo from '../../assets/images/logo-maieutica.svg'
import arrow from '../../assets/icons/arrow.svg'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  return (
    <div className={styles.header}>
      <img src={logo} alt='Logo-Maieutica' />

      <div className={styles.links}>
        <a className={styles.text} onClick={() => navigate('/')}>Home</a>
        <a className={styles.text} onClick={() => navigate('/about-us')}>Sobre nós</a>
        <a className={styles.text} onClick={() => navigate('/contact-us')}>Fale conosco</a>
        <a className={styles.text} onClick={() => navigate('/our-services')}>Nossos serviços</a>

        <button
          className={styles.button}
          onClick={() => navigate('/job-board')}
        >
          Ver vagas

          <img src={arrow} alt='Arrow' />
        </button>
      </div>
    </div>
  )
}
