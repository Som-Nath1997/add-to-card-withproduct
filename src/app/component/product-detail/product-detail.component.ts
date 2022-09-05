import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
console.log("details compnent")

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public productDetails :any = [];
  public id:any

  constructor(private api : ApiService
    ,private route: ActivatedRoute,  private cartService : CartService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.api.getProductDetail(this.id).subscribe(res => {
      this.productDetails = res;
      console.log(this.productDetails)
  })

}
addtocart(item: any){
  this.cartService.addtoCart(item);
}

}
