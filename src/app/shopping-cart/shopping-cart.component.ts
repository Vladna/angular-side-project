import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { VinaService } from '../vino.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Vina } from '../vino.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

  vinaShoppingCart: Vina[];
  subscription: Subscription;
  cena:number=0;
  @Input() index: number
  constructor(private vinaService: VinaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.vinaService.shopingCartChanged
      .subscribe(
        (shoppingCart: Vina[]) => {
          this.vinaShoppingCart = shoppingCart;
        }
      );
    this.vinaShoppingCart = this.vinaService.getShoppingCart();
    
  }

  cenaShoppingCart() {
    for  (let index in this.vinaShoppingCart){
      this.cena+= +this.vinaShoppingCart[index].cena;
      console.log(this.cena);
  }

  }

  onDeleteShoppingCartItem(index: number) {
    this.vinaService.deleteShoppingCartItem(index);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
