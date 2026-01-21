import {useState} from 'react';

import H1 from './headers/H1';

function uid() {
    return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

export default function App() {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState("");

    function addNewTask(event) {
        event.preventDefault();

        const newTasks = [
            ...tasks,
            {id: uid(), text: text, status: 0}
        ];

        setTasks(newTasks);
    }
    
    return (
        <>
            <H1>ToDo</H1>
            <form class="form" onSubmit={addNewTask}>
                <input type="text" placeholder="Новая задача..." onChange={ (e) => setText(e.target.value) } />
                <button type="submit">Добавить</button>
            </form>
            <ul class="list">
                {
                    tasks.map(function(task){
                        return (
                                <li class="item">
                                    <input type="checkbox" checked value="1" />
                                    <span class="done">Задача 1</span>
                                    <button>❌</button>
                                </li>
                            )
                        }
                    )
                }
            </ul>
        </>
    );
}