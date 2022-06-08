import React from "react";
import styles from "./index.module.scss";
import { useToDoStore } from '../../data/stores/useToDostore'
import { InputPlus } from "../components/InputPlus"
import { InputTask } from "../components/InputTask";
export const App: React.FC = () => {
    const [tasks,
        createTask,
        updateTask,
        removeTask
    ] = useToDoStore(state => [
        state.tasks,
        state.createTask,
        state.updateTask,
        state.removeTask
    ])

    return (
        <article className={styles.main}>
            <h1 className={styles.mainTitle}>ToDo App</h1>
            <section className={styles.mainFirstSection}>
                <InputPlus onAdd={(title) => {
                    if (title) {
                        createTask(title)
                    }
                }} />
            </section>
            <section className={styles.mainSecondSection}>
                {!tasks.length && (
                    <p className={styles.mainNoTaskText}>You have not added any task...</p>
                )}
                {tasks.map((task) => (
                    <InputTask
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        onDone={removeTask}
                        onEdited={updateTask}
                        onRemoved={removeTask}
                    />
                ))}
            </section>
        </article>
    )
}