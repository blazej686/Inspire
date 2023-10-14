import { AppState } from "../AppState.js";
import { Account } from "../models/Account.js";
import { todoService } from "../services/TodosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawTodos() {
    const todos = AppState.myTodos
    let content = ''
    AppState.myTodos.forEach(todo => content += todo.todoListTemplate)
    setHTML('todoList', content)

    const completedTodos = todos.filter(todo => todo.completed)
    setHTML('todoCount', todos.length - completedTodos.length)

}


export class TodosController {
    constructor() {
        AppState.on('account', this.getTodos)
        AppState.on('myTodos', _drawTodos)


    }

    async getTodos() {

        await todoService.getTodos()

        try {

        } catch (error) {
            Pop.error(error)
            console.error(error);

        }
    }

    async createTodo(event) {

        console.log(event);
        try {
            event.preventDefault()
            const form = event.target
            console.log('form after targeting', form);
            const todoData = getFormData(form)

            await todoService.createTodo(todoData)
            form.reset()

        } catch (error) {
            Pop.error(error)
            console.error(error);

        }
    }

    async removeTodo(todoId) {
        console.log('remove todo', todoId);
        try {
            const confirm = await Pop.confirm('Are you sure you want to delete the note?')
            if (!confirm) {
                return
            }
            console.log('id passing to service', todoId);
            await todoService.removeTodo(todoId)

        } catch (error) {

        }
    }

    async completeTodo(todoId) {
        console.log('box checked/unchecked', todoId);
        try {
            await todoService.completeTodo(todoId)

        } catch (error) {
            Pop.error(error)
            console.error(error);

        }
    }
}