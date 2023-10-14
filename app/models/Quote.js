export class Quote {
    constructor(data) {
        this.content = data.content
        this.author = data.author

    }


    get QuoteTemplate() {
        return `
        <p id="quote" class="m-0">${this.content}</p>
        <p id="author" class="m-0 author">${this.author}</p>
`

    }
}