import { Panel } from '../../components/Panel/Panel'
import { Header } from '../../components/Header/Header'
import { Section } from '../../components/Section/Section'
import styles from './JobBoard.module.css'
import React from 'react'
import { JobBoardC } from '../../components/JobBoardC/JobBoardC'

export default function JobBoard() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header />
      <Panel
        title="Painel de vagas"
        colorPanel="#5A9E8C"
        subTitle="Painel de vagas"
        fontColor="#FFF"
      />
      <div className={styles.sectionBoard}>
        <Section
          category='CONECTANDO PESSOAS'
          categoryColor='rgba(90, 158, 140, 1)'
          title='Confira as vagas'
          titleColor='rgba(206, 108, 57, 1)'
          description='Entre em contato para tirar dúvidas, solicitar informações ou conversar com nossa equipe.<br/><strong>Estamos prontos para ajudar!</strong>'
          descriptionColor='rgba(114, 114, 114, 1)'
        />
        <JobBoardC />
      </div>
    </div>
  )
}
