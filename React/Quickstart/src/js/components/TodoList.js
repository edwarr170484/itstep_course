import Header from './Header';
import {List} from './MainPage';

function TodoList(){
    const tasks = [
        { title: 'Встать в 5 утра', isFruit: false, id: 1 },
        { title: 'Заглянуть в план задач', isFruit: false, id: 2 },
        { title: 'Выучить Javascript', isFruit: true, id: 3 },
    ];

    return (
        <div className="todo">
            <Header headerTegName="h1" headerText="Список задач"/>
            <List items={tasks} />
        </div>
    );
}

export default TodoList;