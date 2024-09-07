import './global.css';

import styles from './App.module.css';
import { Header } from './components/Header';
import { PlusCircle } from '@phosphor-icons/react';
import {
    ChangeEvent,
    FormEvent,
    InvalidEvent,
    useEffect,
    useState,
} from 'react';
import { TaskCounter } from './components/TaskCounter';
import { EmptyTaskList } from './components/EmptyTaskList';

export interface Task {
    id: string;
    content: string;
    completed: boolean;
}

function App() {
    const [newTaskText, setNewTaskText] = useState('');
    const [tasks, setTasks] = useState<Task[]>(() => getTasksLocalStorage());

    useEffect(() => {
        saveToLocalStorage();
    }, [tasks]);

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        const newTaskList = [
            ...tasks,
            {
                id: new Date().getTime().toString(),
                content: newTaskText,
                completed: false,
            },
        ];
        setTasks(newTaskList);
        setNewTaskText('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    function getTasksLocalStorage(): Task[] {
        const storedValue = localStorage.getItem('todolist-ignite');
        return storedValue ? JSON.parse(storedValue) : [];
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function saveToLocalStorage() {
        localStorage.setItem('todolist-ignite', JSON.stringify(tasks));
    }

    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <form
                    className={styles.newTaskForm}
                    onSubmit={handleCreateNewTask}
                >
                    <input
                        type="text"
                        placeholder="Adicione uma nova tarefa"
                        onChange={handleNewTaskChange}
                        onInvalid={handleNewTaskInvalid}
                        required
                        value={newTaskText}
                    />
                    <button type="submit">
                        Criar
                        <PlusCircle size={20} />
                    </button>
                </form>
                <TaskCounter tasks={tasks} />

                {tasks.length > 0 ? (
                    tasks.map((task) => {
                        return <p key={task.id}>{task.content}</p>;
                    })
                ) : (
                    <EmptyTaskList />
                )}
            </div>
        </>
    );
}

export default App;
