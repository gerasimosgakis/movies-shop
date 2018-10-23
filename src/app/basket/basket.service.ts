import { Order } from "../shared/order.model";
import { Movie } from "../movies/movie.model";
import { Subject } from "rxjs";

export class BasketService {
    public ordersChanged = new Subject<Order[]>();
    public startedEditing = new Subject<number>();
    private orders: Order[] = [
        new Order('Trainspotting', 19.95, 1),
        new Order('A Clockwork Orange', 12.00, 2)
    ];

    public getOrders() {
        return this.orders.slice();
    }

    getOrder(index: number) {
        return this.orders[index];
    }

    public addOrder(order: Order) {
        this.orders.push(order);
        this.ordersChanged.next(this.orders.slice());
    }

    public addMovie(movie: Movie) {
        this.orders.push(
            new Order(movie.title, null, 1)
        );
        this.ordersChanged.next(this.orders.slice());
    }

    public updateMovie(index: number, newOrder: Order) {
        this.orders[index] = newOrder;
        this.ordersChanged.next(this.orders.slice());
    }
}