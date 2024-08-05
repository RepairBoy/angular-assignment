import { Component, Input } from '@angular/core';
import { Product } from '../../core/interfaces/product';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-checkout-button',
  standalone: true,
  imports: [],
  templateUrl: './checkout-button.component.html',
  styleUrl: './checkout-button.component.css'
})
export class CheckoutButtonComponent {
  @Input() products!:Product;
  isInvisible:boolean = true;
  constructor( public productService:ProductsService) {}

  addToCart(product:Product){
    this.isInvisible = !this.isInvisible;
    this.productService.myCart.update(prevCart => [...prevCart, product]);
    this.productService.changestock(product.id, product.stock - 1)
    console.log(this.productService.myCart());
    console.log(this.productService.myproductdata());
  }
}
