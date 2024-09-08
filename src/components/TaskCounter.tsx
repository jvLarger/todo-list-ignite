import styles from './TaskCounter.module.css';
import { Task } from './TaskItem';

interface TaskCounterProps {
    tasks: Task[];
}

export function TaskCounter({ tasks }: TaskCounterProps) {
    const countCompletedTasks = tasks.filter((task) => {
        return task.completed;
    }).length;

    return (
        <div className={styles.container}>
            <div>
                <strong className={styles.createdTask}>Tarefas Criadas</strong>
                <span className={styles.badge}>{tasks.length}</span>
            </div>
            <div>
                <strong className={styles.completedTask}>Concluídas</strong>
                <span className={styles.badge}>
                    {countCompletedTasks == 0
                        ? countCompletedTasks
                        : countCompletedTasks + ' de ' + tasks.length}
                </span>
            </div>
        </div>
    );
}
