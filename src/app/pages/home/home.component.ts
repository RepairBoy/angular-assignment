import { Component } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { CardComponent } from "../../ui/card/card.component";
import { Product } from '../../core/interfaces/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products!: any;
  sectionCategory!:string[];
  sectionTitle!:string[];


  constructor(public productService:ProductsService){
    this.productService.fetchData();
    
  }


  ngOnInit():void{
      
      
      this.products = this.productService.myproductdata();
      this.productService.fetchData()
      console.log('hf',this.products);
      

      if(this.products && this.products.length > 0){
        this.sectionCategory = this.getUniqueCategories(this.products);
        this.sectionTitle = this.capitalizeFirstLetter(this.sectionCategory)
      }
      
      // console.log(this.productService.myproductdata());
      // this.changestock(1, 55);
      // console.log(this.productService.myproductdata());
  
  }
//   changestock(productId: number, newStock: number) {
//     this.productService.myproductdata.update(prevProducts => {
//       return prevProducts.map(product => {
//         if (product.id === productId) {
//           return { ...product, stock: newStock };
//         }
//         return product;
//       });
//   });
//  }


  getUniqueCategories(items: Product[]): string[] {
    const categories = items.map(item => item.category);
    return Array.from(new Set(categories));
  }
  capitalizeFirstLetter(myString: string[]): string[] {
    if (!myString) return myString;
    let output:string[] = [];
    myString.forEach(item =>{
      output.push(item.charAt(0).toUpperCase() + item.slice(1))
    })
    return output;
  }


}
