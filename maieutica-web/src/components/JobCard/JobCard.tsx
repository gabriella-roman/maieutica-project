import React, { useState } from 'react';
import styles from './JobCard.module.css';

export interface JobCardProps {
  title: string;
  description: string;
  location: string;
  area: string;
  salary: string;
  contractingRegime: string;
}

export function JobCard(props: JobCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p
          className={`${styles.cardText} ${isExpanded ? styles.expanded : styles.collapsed}`}
        >
          {props.description}
        </p>
        <ul className="list-unstyled mb-3">
          {props.location && (
            <li>
              <strong>📍</strong> {props.location}
            </li>
          )}
          {props.area && (
            <li>
              <strong>📘</strong> {props.area}
            </li>
          )}
          {props.salary && (
            <li>
              <strong>💰</strong> {props.salary}
            </li>
          )}
          {props.contractingRegime && (
            <li>
              <strong>📋</strong> {props.contractingRegime}
            </li>
          )}
        </ul>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={toggleDetails}
          >
            {isExpanded ? 'Recolher' : 'Detalhes da vaga'}
          </button>
          <button className="btn btn-primary btn-sm">Me candidatar</button>
        </div>
      </div>
    </div>
  );
}
