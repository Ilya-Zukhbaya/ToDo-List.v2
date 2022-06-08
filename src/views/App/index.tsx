import React from "react";
import styles from "./index.module.scss";
import { useToDoStore } from '../../data/stores/useToDostore'

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
            <h1 className={styles.Title}>ToDo App</h1>
            <section className={styles.main__firstSection}>

            </section>
            <section className={styles.main__secondSection}>

            </section>
        </article>
    )
}