import { Injectable } from '@angular/core';

//Category Interface
export interface ICategory {
  id: number,
  name: string,
  image: string,
}

//Product Interface
export interface IProduct {
  id: number,
  name: string,
  price: number,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCategories() {
    let categories = [];

    let cat1: ICategory = {
      id: 1,
      name: 'Womens',
      image: '../../assets/categories/category-1.png',
    }

    let cat2: ICategory = {
      id: 1,
      name: 'Mens',
      image: '../../assets/categories/category-2.png',
    }

    let cat3: ICategory = {
      id: 1,
      name: 'Kids',
      image: '../../assets/categories/category-3.png',
    }

    categories.push(cat1, cat2, cat3);

    return categories;

  }

  getFeaturedProducts() {
    let products = [];

    let product1: IProduct = {
      id: 1,
      name: 'Womens T-shirt',
      price: 75,
      image: '../../assets/products/prod-1.png',
    }

    let product2: IProduct = {
      id: 1,
      name: 'Mens T-shirt',
      price: 55,
      image: '../../assets/products/prod-2.png',
    }

    let product3: IProduct = {
      id: 1,
      name: 'Womens T-shirt',
      price: 65,
      image: '../../assets/products/prod-3.png',
    }

    let product4: IProduct = {
      id: 1,
      name: 'Womens T-shirt',
      price: 725,
      image: '../../assets/products/prod-4.png',
    }

    let product5: IProduct = {
      id: 1,
      name: 'Mens T-shirt',
      price: 515,
      image: '../../assets/products/prod-5.png',
    }

    let product6: IProduct = {
      id: 1,
      name: 'Womens T-shirt',
      price: 625,
      image: '../../assets/products/prod-6.png',
    }

    products.push(product1, product2, product3, product4, product5, product6);

    return products;

  }

  getBestSellProducts() {
    let products = [];

    let product4: IProduct = {
      id: 1,
      name: 'Womens T-shirt',
      price: 725,
      image: '../../assets/products/prod-4.png',
    }

    let product5: IProduct = {
      id: 1,
      name: 'Mens T-shirt',
      price: 515,
      image: '../../assets/products/prod-5.png',
    }

    let product6: IProduct = {
      id: 1,
      name: 'Womens T-shirt',
      price: 625,
      image: '../../assets/products/prod-6.png',
    }

    products.push(product6, product5, product4);

    return products;

  }
}
