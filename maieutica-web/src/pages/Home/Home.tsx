import React from 'react'
import styles from './Home.module.css'
import { Carousel } from '../../components/Carousel/Carousel'
import image14 from '../../assets/images/image14.svg';
import image15 from '../../assets/images/image15.svg';
import image16 from '../../assets/images/image16.svg';
import image17 from '../../assets/images/image17.svg';
import image18 from '../../assets/images/image18.svg';
import image19 from '../../assets/images/image19.svg';
import { JobCard } from '../../components/JobCard/JobCard';

export default function Home() {
  const images = [
    { id: 1, src: image14, alt: 'Parceiro 1' },
    { id: 2, src: image15, alt: 'Parceiro 2' },
    { id: 3, src: image16, alt: 'Parceiro 3' },
    { id: 4, src: image17, alt: 'Parceiro 4' },
    { id: 5, src: image18, alt: 'Parceiro 5' },
    { id: 6, src: image19, alt: 'Parceiro 6' },
    { id: 7, src: image14, alt: 'Parceiro 7' },
    { id: 8, src: image15, alt: 'Parceiro 8' },
    { id: 9, src: image16, alt: 'Parceiro 9' },
    { id: 10, src: image17, alt: 'Parceiro 10' },
    { id: 11, src: image18, alt: 'Parceiro 11' },
    { id: 12, src: image19, alt: 'Parceiro 12' }
  ];


  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <div className={styles.content}>
        <JobCard
          title="Desenvolvedor Frontend"
          description="<p>O Analista de Recrutamento e Seleção é responsável por identificar, atrair e selecionar talentos que se alinhem à cultura e às necessidades da empresa. Este profissional desempenha um papel crucial na construção de equipes de alto desempenho.</p><ul><li>Elaborar e revisar descrições de cargos em parceria com os gestores.</li><li>Divulgar oportunidades de emprego em diversas plataformas.</li><li>Realizar triagens de currículos e pré-seleções de candidatos.</li><li>Conduzir entrevistas por telefone e presenciais.</li><li>Aplicar testes e dinâmicas para avaliação de competências.</li><li>Manter atualizado o banco de currículos da empresa.</li><li>Elaborar relatórios sobre o processo de recrutamento.</li><li>Propor melhorias nos processos de seleção e integração.</li></ul>"
          location="São Paulo, SP"
          area="Tecnologia da Informação"
          salary="to_match"
          contractingRegime="CLT"
          slugLink="https://www.exemplo.com/vaga/desenvolvedor-frontend"
        />
        <JobCard
          title="Desenvolvedor Frontend"
          description="<p>•\tAdquirir conhecimento sobre os programas curriculares utilizados nas séries em que leciona (BNCC, currículo IBDP);</p><p>•\tTrabalhar colaborativamente com outros professores e lideranças da matéria e do segmento, buscando alinhamento e consistência;</p><p>•\tPlanejar as aulas e produzir materiais pedagógicos, levando em conta as individualidades dos alunos;</p><p>•\tMinistrar aulas de Biologia para alunos do Ensino Médio e do Fundamental 2, de forma alinhada com a BNCC, IBDP e o Material Didático selecionado pela escola (físico ou digital);</p><p>•\tUtilizar práticas variadas de ensino/aprendizagem, incluindo metodologias ativas, ensino responsivo, avaliação para o aprendizado (Assessment for Learning) e métodos investigativos;</p><p>•\tUtilizar de forma consistente tecnologias para enriquecer e melhorar o aprendizado;</p><p>•\tSupervisionar alunos em espaços escolares;</p><p>•\tSubstituir professores no mesmo segmento quando solicitado;</p><p>•\tMediar relacionamento entre crianças, famílias e escola;</p><p>•\tPreparar avaliações e comunicar os resultados;</p><p>•\tTabular e analisar dados pedagógicos com o intuito de ajustar ensino e melhorar o aprendizado;</p><p>•\tFormatar e alimentar com dados nossa plataforma de acompanhamento de avaliações (iSams) em preparação para relatórios para famílias;</p><p>•\tParticipar de reuniões pedagógicas (incluindo COC- Conselho de classe) e eventos realizados na escola;</p><p>•\tGarantir a segurança física e emocional dos alunos, e zelar pelo seu crescimento sócio-emocional (safeguarding).</p><p><br></p>"
          location="São Paulo, SP"
          area="Tecnologia da Informação"
          salary={8000}
          contractingRegime="CLT"
          slugLink="https://www.exemplo.com/vaga/desenvolvedor-frontend"
        />
      </div>
    </div>
  );
}