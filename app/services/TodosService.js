import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { api } from "./AxiosService.js";

class TodosService {
    async completeTodo(todoId) {
        const todoIndex = AppState.myTodos.findIndex(todo => todo.id == todoId)
        if (todoIndex == -1) { return }
        const foundTodo = AppState.myTodos[todoIndex]
        console.log('todo index', todoIndex, 'foundTodo', foundTodo);
        const todoData = {
            completed: !foundTodo.completed
        }
        const res = await api.put(`api/todos/${todoId}`, todoData)
        console.log('updated todo', res.data);
        const newTodo = new Todo(res.data)

        AppState.myTodos.splice(todoIndex, 1, newTodo)
        AppState.emit('myTodos')

    }
    async removeTodo(todoId) {

        const res = await api.delete(`api/todos/${todoId}`)
        console.log('res data', res.data);

        AppState.myTodos = AppState.myTodos.filter((todo) => todo.id != todoId)

    }
    async getTodos() {
        const res = await api.get('api/todos')
        AppState.myTodos = res.data.map(todo => new Todo(todo))
    }

    async createTodo(todoData) {
        console.log(todoData);
        const res = await api.post('api/todos', todoData)
        const newTodo = new Todo(res.data)
        console.log('newtodo', newTodo);

        AppState.myTodos.push(newTodo)
        AppState.emit('myTodos')

    }

}

export const todoService = new TodosService()