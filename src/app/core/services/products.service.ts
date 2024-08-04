import { Injectable, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Product } from '../interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public myproductdata = signal<any[]>([]);
  private apiUrl = 'https://dummyjson.com/products';
  private productsSubject = new BehaviorSubject<any[]>([]);
  public products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchData().subscribe();

  }

  // Method to fetch data from the API and store it in the 'productsSubject'
  private fetchData(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      tap(response => {
        this.productsSubject.next(response.products);
        
      })
    );
  }

  // Method to get the stored data
  getProducts(): Observable<any[]> {
    return this.products$;
  }


}
