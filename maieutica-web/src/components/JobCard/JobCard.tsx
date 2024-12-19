import React, { useState } from 'react';
import styles from './JobCard.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowToRight from '@mui/icons-material/KeyboardArrowRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PaidIcon from '@mui/icons-material/Paid';
import ContractingIcon from '@mui/icons-material/HowToReg';

export interface JobCardProps {
  title: string;
  description: string;
  location: string;
  area: string;
  salary: number | string;
  contractingRegime: string;
  slugLink: string;
}

export function JobCard(props: JobCardProps) {
  const {
    title,
    description,
    location,
    area,
    salary,
    contractingRegime,
    slugLink,
  } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    console.log('Botão clicado');
    setIsExpanded((prev) => !prev);
  };

  const formatWithActivities = (description: string) => {
    const cleanedString = description.replace(/•\t/g, '').trim();

    const sentences = cleanedString.split(/;<\/p>/);

    const formattedSentences = sentences.map((sentence) => {
      const cleanSentence = sentence.replace(/<p>/g, '').replace(/<\/p>/g, '').trim();
      return `<p>• ${cleanSentence}</p>`;
    });

    return `<h6>Atividades:</h6>${formattedSentences.join('')}`;
  };

  const formattedSalary = (salary: number | string) => {
    if (typeof salary === 'number') {
      return `R$ ${salary.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    }
    return salary === 'to_match' ? 'A combinar' : salary;
  };

  return (
    <div className={styles.card}>
      <div>
        <h5 className={styles.cardTitle}>{title}</h5>
        <div className={`${styles.cardContent} ${isExpanded ? styles.expanded : ''}`}>
          <div
            className={`${styles.cardDescription} ${isExpanded ? styles.expanded : ''}`}
            dangerouslySetInnerHTML={{ __html: `<ul>${formatWithActivities(description)}</ul>` }}
          />
          <div className={styles.detailsContainer}>
            <ul>
              {location && (
                <li>
                  <LocationOnIcon />
                  {location}
                </li>
              )}
              {area && (
                <li>
                  <BusinessCenterIcon />
                  {area}
                </li>
              )}
              {salary && (
                <li>
                  <PaidIcon />
                  {formattedSalary(salary)}
                </li>
              )}
              {contractingRegime && (
                <li>
                  <ContractingIcon />
                  {contractingRegime}
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className={styles.actions}>
          <button onClick={toggleExpand} className={styles.buttonCard}>
            {isExpanded ? 'Esconder detalhes' : 'Detalhes da vaga'}
            {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </button>
          <a href={slugLink} target="_blank" rel="noopener noreferrer">
            <button className={styles.buttonCard}>
              Me candidatar <ArrowToRight />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
