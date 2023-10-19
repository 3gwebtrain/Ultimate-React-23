import { ButtonProp } from './../types/PropTypes';
import styles from './Button.module.css';

function Button({ children, onClick, type }: ButtonProp) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
