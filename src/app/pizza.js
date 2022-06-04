import { pizzas } from './PizzaApi/pizzaApi';
import { Basket } from './basket';

export class Pizza {
    id;
    name;
    image;
    price;
    topping = [];
    constructor(id, name, price, topping = []) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.topping = topping;
    }
    static async pizzaList() {
        const allPizzas = await pizzas.getPizzas();
        let pizzawrapper = document.getElementById('pizza-wrapper');
        allPizzas.forEach(pizza => {
            pizzawrapper.innerHTML += `<div class="col-md-3">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${pizza.image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${pizza.name}</h5>
                    <p class="card-text">${pizza.topping}</p>
                    <a class="btn btn-primary add-to-cart" data-id="${pizza.id}">Add to Cart</a>
                </div>
            </div>
        </div>`
        });
        document.querySelectorAll('.add-to-cart').forEach(el => {
            const data_id = el.getAttribute('data-id');
            const selected = allPizzas.find(sel => sel.id == data_id);
            el.addEventListener('click', function() {
                Basket.addToBasket(selected);
            });
        });
    }
}