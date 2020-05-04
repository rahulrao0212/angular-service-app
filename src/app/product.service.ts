import { Product } from './product'

export class ProductService {

    public getProducts() {

        let products: Product[];

        products = [
            new Product(1, 'Wheat', 500),
            new Product(2, 'Rice', 750),
            new Product(3, 'Sugar', 100),
            new Product(4, 'Salt', 100),
            new Product(5, 'Jaggery', 100),
            new Product(6, 'Chilly powder', 100)
        ]

        return products;
    }
}