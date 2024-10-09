import React from 'react';
import styles from './Card.module.css'; 

const Card = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Baleta</h2>
      <p className={styles.description}>Precio: $59.999</p>
      <button className={styles.button}>Comprar aquí</button>
    </div>
  );
};

export default Card;
