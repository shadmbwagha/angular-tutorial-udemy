import { Component } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',

})
export class ProductsComponent {
  productName : any;
  products = ['shad23', 'shad22']
  isDisabled = true

  constructor(private productsService: ProductsService ){
    setTimeout(()=>{
      //this.productName = "shad22";
      this.isDisabled = !this.isDisabled;
    }, 3000);
  }

  addProduct(){
    //this.products.push(this.productName);
  }
  onRemoveProduct(productName: string){
    this.products = this.products.filter(p => p !== productName);
  }
  onAddProduct(form: any){
    if(form.valid)
      this.productsService.addProduct(form.value.productName)
      //this.products.push(form.value.productName);
    //console.log(form)
  }
}
