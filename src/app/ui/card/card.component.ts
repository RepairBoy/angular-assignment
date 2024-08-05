import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { Product } from '../../core/interfaces/product';
import { CurrencyPipe } from '@angular/common';
import { ProductsService } from '../../core/services/products.service';
import { CheckoutButtonComponent } from "../checkout-button/checkout-button.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgOptimizedImage, CurrencyPipe, CheckoutButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() products!:Product;

  constructor(private router: Router, public productService:ProductsService) {}

  // btnEvent(id:number) {
  //   this.router.navigate([`/product/${id}`]);
  // }

  convertToInr(amount:number):string{
    const rupees = amount * 83.79;
    return rupees.toFixed(2);
  }

  
}
