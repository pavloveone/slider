import React from 'react';
import styles from './carusel-item.module.css';

export const CaruselItem = ({props}) => {
    return (
        <li key={props.id} className={styles.item}>
            <img className={styles.image} alt={props.name} src={props.image} />
            <div className={styles.container}>
                <p className={styles.text}>{props.name}</p>
                {props.status.toLowerCase() === 'alive' && (
                    <span className={styles.status_alive}>{props.status}</span>
                )}
                {props.status.toLowerCase() === 'dead' && (
                    <span className={styles.status_dead}>{props.status}</span>
                )}
                {props.status.toLowerCase() === 'unknown' && (
                    <span className={styles.status_other}>{props.status}</span>
                )}
            </div>
            <span className={styles.text}>{`страница ${props.id}`}</span>
        </li>
    );
}