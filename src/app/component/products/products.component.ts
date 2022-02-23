import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public productList: any;
  constructor(private api: ApiService, private cartService: CartService) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe((res) => {
      this.productList = res;
      this.productList.forEach((a: any) => {
        a.quantity = 1;
        a.total = a.price;
        console.log(a);
      });
    });
  }
  addToCart(item: any) {
    console.log(item);
    this.cartService.addtoCart(item);
  }
}
