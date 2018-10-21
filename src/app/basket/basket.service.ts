import { Order } from "../shared/order.model";
import { EventEmitter } from "@angular/core";
import { Movie } from "../movies/movie.model";

export class BasketService {
    public ordersChanged = new EventEmitter<Order[]>();
    private orders: Order[] = [
        new Order('Trainspotting', 19.95, 1),
        new Order('A Clockwork Orange', 12.00, 2)
    ];

    public getOrders() {
        return this.orders.slice();
    }

    public addOrder(order: Order) {
        this.orders.push(order);
        this.ordersChanged.emit(this.orders.slice());
    }

    public addMovie(movie: Movie) {
        this.orders.push(
            new Order(movie.title, null, 1)
        );
        this.ordersChanged.emit(this.orders.slice());
    }
}