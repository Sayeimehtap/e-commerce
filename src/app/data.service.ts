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
}
