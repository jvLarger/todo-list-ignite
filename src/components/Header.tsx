import styles from './Header.module.css';
import todoListLogo from '../assets/logo-todo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={todoListLogo} />
        </header>
    );
}
