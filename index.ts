import axios from 'axios';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const PrintOutSmth = (id : number, title : string, completed: boolean) => {
    console.log(`
    The Todo with ID: ${id}
    Has a title of : ${title}
    Is It Fininished ? ${completed}
    `);
}

const fetchData = async () => {
    const { data } = await axios.get('http://jsonplaceholder.typicode.com/todos/1');

    const newData = data as Todo;

    PrintOutSmth(newData.id, newData.title, newData.completed);
}

fetchData();