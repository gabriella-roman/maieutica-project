import { ColoredLine } from '../../components/ColoredLine/ColoredLine'
import styles from './Footer.module.css'
import logo from '../../assets/images/logo-maieutica.svg'
import { NavbarFooter } from '../../components/NavbarFooter/NavbarFooter'

export function Footer() {
  return (
    <div className={styles.footer}>
      <ColoredLine />

      <div className={styles.container}>
        <img src={logo} alt="Logo" height={200} />

        <NavbarFooter
          title='Serviços'
          options={[
            { title: 'Processo seletivo', navigate: '/' },
            { title: 'Perfil psicológico', navigate: '/' },
            { title: 'Aconselhamento de carreira', navigate: '/' },
            { title: 'Outplacement', navigate: '/' },
            { title: 'Avaliação do idioma inglês', navigate: '/' }
          ]}
        />

        <NavbarFooter
          title='Maiêutica RH Educacional'
          options={[
            { title: 'Ver vagas', navigate: '/' },
            { title: 'Fale conosco', navigate: '/contact-us' },
            { title: 'Dúvidas frequentes', navigate: '/' },
            { title: 'Sobre nós', navigate: '/about-us' }
          ]}
        />

        <div style={{ marginTop: 8 }}>
          <div>
            <h1>E-mail</h1>
            <p>contato@maieuticarh.com.br</p>
          </div>

          <div>
            <h1>Localização</h1>
            <p>São Paulo - SP</p>
          </div>

          <div>
            <h1>CNPJ</h1>
            <p>32.175.487/0001-30</p>
          </div>
        </div>
      </div>


      <div className={styles.bottom}>
        <p>
          Desenvolvido por Soav Tech © Todos os direitos reservados.
        </p>

        <p>
          Soav Tech
        </p>

      </div>
    </div>
  )
}
