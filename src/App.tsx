import './global.css';

import styles from './App.module.css';
import { Header } from './components/Header';
import { PlusCircle } from '@phosphor-icons/react';

function App() {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <form className={styles.newTaskForm}>
                    <input placeholder="Adicione uma nova tarefa" />
                    <button type="submit">
                        Criar
                        <PlusCircle size={20} />
                    </button>
                </form>
            </div>
        </>
    );
}

export default App;
