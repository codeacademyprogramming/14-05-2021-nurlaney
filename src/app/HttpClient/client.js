export class HttpClient {

    constructor(url) {
        this.url = url
    }

    async get() {
        return fetch(`${this.url}`).then(response => response.json())
    }
}