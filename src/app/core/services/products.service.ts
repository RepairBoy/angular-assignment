import { Injectable, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Product } from '../interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public myproductdata = signal<Product[]>([]);
  public myCart = signal<Product[]>([]);
  private apiUrl = 'https://dummyjson.com/products';
  // private productsSubject = new BehaviorSubject<any[]>([]);
  // public products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {
    // this.fetchData()
    // this.products = this.productService.getProducts();

  }

  // Method to fetch data from the API and store it in the 'productsSubject'
  public fetchData() {
     this.http.get<any>(this.apiUrl).subscribe((response) => {
     
        // console.log(response.products))
      
        this.myproductdata.set(response.products)
        
        console.log(this.myproductdata());
  })
  }

  // Method to get the stored data
  getProducts() {
    console.log(this.myproductdata());
    
    return this.myproductdata();
  }
  changestock(productId: number, newStock: number) {
    this.myproductdata.update(prevProducts => {
      return prevProducts.map(product => {
        if (product.id === productId) {
          return { ...product, stock: newStock };
        }
        return product;
      });
  });
 }

}
