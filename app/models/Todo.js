export class Todo {

    constructor(data) {
        this.id = data.id
        this.completed = data.completed
        this.creatorId = data.creatorId
        this.description = data.description
    }

    get todoListTemplate() {
        return `
        <p id="todoList">
        <form method="get">
          <input ${this.completed ? 'checked' : ''} onchange="app.TodosController.completeTodo('${this.id}')" type="checkbox" name="completeTodo">
          <label for="completeTodo">${this.description}</label>
          <button onclick='app.TodosController.removeTodo("${this.id}")' class="btn btn-danger p-2 my-2"><i class="mdi mdi-trash-can fs-5"></i></button>
          </p>
                    `
    }
}