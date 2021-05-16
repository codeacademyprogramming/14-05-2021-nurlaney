import { Pizza } from './pizza'
import { pizzas } from './PizzaApi/pizzaApi';

export class Basket {

    static getStorage() {
        return JSON.parse(localStorage.getItem('pizza'));
    }

    static checkPizzaExistence(id) {
        const basket = this.getStorage();
        basket.forEach(el => {
            if (el.id == id) {
                return true;
            } else {
                return false;
            }
        })
    }

    static getPizza(id) {
        this.getStorage().find(x => x.id == id);
    }

    static addToBasket(pizza) {
        const pizzaInstorage = new Pizza(pizza.id, pizza.name, pizza.price, pizza.topping);
        localStorage.setItem('pizza', JSON.stringify([pizzaInstorage]));
        this.basketList();
    }

    static basketList() {
        const pizzas = this.getStorage();
        const basketwrapper = document.getElementById('dropwdown-cart');
        pizzas.forEach(pizza => {
            basketwrapper.innerHTML += `<div class="cart-items">
            <div class="img-div">
                <img src="${pizza.image}" alt="">
            </div>
            <h5>${pizza.name}</h5>
            <span>${pizza.price}$</span>
        </div>`
        })
    }
}