import { CheckCircle, Circle, Trash } from '@phosphor-icons/react';

import styles from './TaskItem.module.css';
import { FormEvent } from 'react';

export interface Task {
    id: string;
    content: string;
    completed: boolean;
}

interface TaskItemProps {
    task: Task;
    onChangeCompletedValue: (task: Task) => void;
    onDeleteTask: (task: Task) => void;
}

export function TaskItem({
    task,
    onChangeCompletedValue,
    onDeleteTask,
}: TaskItemProps) {
    function handleCompletedValue() {
        onChangeCompletedValue(task);
    }

    function handleDeleteTask(event: FormEvent) {
        event?.preventDefault();
        onDeleteTask(task);
    }

    const classCompleted = task.completed ? styles.completed : '';

    return (
        <label className={styles.container + ' ' + classCompleted}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleCompletedValue}
            />
            {task.completed ? (
                <CheckCircle
                    weight="fill"
                    className={styles.checkboxChecked}
                    size={24}
                />
            ) : (
                <Circle className={styles.checkbox} size={24} />
            )}
            <p>{task.content}</p>
            <button onClick={handleDeleteTask} title="Deletar Tarefa">
                <Trash size={24} />
            </button>
        </label>
    );
}
