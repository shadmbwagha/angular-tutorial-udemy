import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',

})
export class ProductsComponent implements OnInit{
  productName : any;
  products = [''];
  isDisabled = true;

  constructor(private productsService: ProductsService ){
    this.products = this.productsService.getProduct();
    setTimeout(()=>{
      //this.productName = "shad22";
      this.isDisabled = !this.isDisabled;

    }, 3000);
  }

  ngOnInit(): void {
      
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
