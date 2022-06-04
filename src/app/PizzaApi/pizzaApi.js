import { HttpClient } from '../HttpClient/client.js';

class PizzaApi extends HttpClient {
    constructor() {
        super('https://isko88.github.io/apipizza.json');
    }

    getPizzas() {
        return this.get(this.url);
    }
}

export const pizzas = new PizzaApi();