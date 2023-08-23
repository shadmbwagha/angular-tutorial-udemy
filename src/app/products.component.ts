import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',

})
export class ProductsComponent {
  productName : any;
  products = ['shad23', 'shad22']
  isDisabled = true

  constructor(){
    setTimeout(()=>{
      //this.productName = "shad22";
      this.isDisabled = !this.isDisabled;
    }, 3000);
  }

  addProduct(){
    this.products.push(this.productName);
  }
  onRemoveProduct(productName: string){
    this.products = this.products.filter(p => p !== productName);
  }
}
