import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta1.jpg',
      title: 'Camiseta',
      price: 14000,
      description: 'Camiseta 1'
    },
    {
      id: '2',
      image: 'assets/images/camiseta2.jpg',
      title: 'Camiseta 2',
      price: 9000,
      description: 'Camiseta 2'
    },
    {
      id: '3',
      image: 'assets/images/hoodie1.jpg',
      title: 'Hoodie',
      price: 8000,
      description: 'Hoodie 1'
    },
    {
      id: '4',
      image: 'assets/images/hoodie2.jpg',
      title: 'Hoodie',
      price: 13000,
      description: 'Hoodie 2'
    },
    {
      id: '5',
      image: 'assets/images/camiseta3.jpg',
      title: 'Camiseta bape',
      price: 3000,
      description: 'Camiseta bape'
    },
    {
      id: '6',
      image: 'assets/images/camiseta4.jpg',
      title: 'Camiseta pyscho bunny',
      price: 1100,
      description: 'Camiseta pyscho bunny'
    },
    {
      id: '7',
      image: 'assets/images/camiseta5.jpg',
      title: 'Camiseta',
      price: 14000,
      description: 'Camiseta 1'
    },
    {
      id: '8',
      image: 'assets/images/hoodie3.png',
      title: 'Hoodie Bape Rojo',
      price: 9000,
      description: 'Hoodie Bape Rojo'
    },
    {
      id: '9',
      image: 'assets/images/jacket1.jpg',
      title: 'Jacket',
      price: 8000,
      description: 'Jacket'
    },
    {
      id: '10',
      image: 'assets/images/jacket2.jpg',
      title: 'Hoodie',
      price: 13000,
      description: 'Hoodie 2'
    },
    {
      id: '5',
      image: 'assets/images/saco1.jpg',
      title: 'Camiseta bape',
      price: 3000,
      description: 'Camiseta bape'
    },
    {
      id: '6',
      image: 'assets/images/jacket3.jpg',
      title: 'Camiseta pyscho bunny',
      price: 1100,
      description: 'Camiseta pyscho bunny'
    }
    
  ];

  constructor() { }


  getAllProducts() {
    return this.products
  }

  getProduct(id: string) {
    return this,this.products.find(item => id == item.id)
  }
}
