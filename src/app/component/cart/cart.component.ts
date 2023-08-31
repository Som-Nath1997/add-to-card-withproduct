import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import Swal from 'sweetalert2';
console.log("card compnet")

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Remove it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.cartService.removeCartItem(item);
        Swal.fire(
          'Deleted!',
          'Your item has been removed.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your item is not removed from cart',
          'error'
        )
      }
    })
  }
  emptycart(){

    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Remove it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.cartService.removeAllCart();
        Swal.fire(
          'Deleted!',
          'Your item has been removed.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your item is not removed from cart',
          'error'
        )
      }
    })
    
  }

}
