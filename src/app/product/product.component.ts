import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  @Input() productName : String | undefined ;
  @Output() onProductClicked = new EventEmitter()

  constructor(){

  }

  ngOnInit(): void {

  }
  onClicked(){
    this.onProductClicked.emit();
  }

}
