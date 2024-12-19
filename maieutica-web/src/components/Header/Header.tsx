import styles from './Header.module.css'
import logo from '../../assets/images/logo-maieutica.svg'
import arrow from '../../assets/icons/arrow.svg'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  return (
    <div className={`${styles.header} navbar navbar-expand-lg navbar-light bg-light`}>
      <div className="container-fluid">
        {/* Logo */}
        <img src={logo} alt="Logo-Maieutica" className={styles.iconeBrand} />

        {/* Toggle Button para Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links de Navegação */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className={`${styles.links} navbar-nav ms-auto`}>
            <a className={`${styles.text} nav-link`} onClick={() => navigate('/')}>
              Home
            </a>
            <a className={`${styles.text} nav-link`} onClick={() => navigate('/about-us')}>
              Sobre nós
            </a>
            <a className={`${styles.text} nav-link`} onClick={() => navigate('/contact-us')}>
              Fale conosco
            </a>
            <a className={`${styles.text} nav-link`} onClick={() => navigate('/our-services')}>
              Nossos serviços
            </a>

            <button
              className={`${styles.button} btn`}
              onClick={() => navigate('/job-board')}
            >
              Ver vagas
              <img src={arrow} alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}