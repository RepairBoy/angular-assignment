import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { Product } from '../../core/interfaces/product';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() products!:Product;

  constructor(private router: Router) {}

  // btnEvent(id:number) {
  //   this.router.navigate([`/product/${id}`]);
  // }
}
