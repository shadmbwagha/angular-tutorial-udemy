export class ProductsService
{
  private products = ['A book '];

  addProduct(productName: string){
    this.products.push(productName);

  }

  getProduct(){
    return [...this.products];
  }
}
