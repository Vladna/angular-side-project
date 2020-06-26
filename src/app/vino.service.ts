import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Vina } from './vino.model';


@Injectable()
export class VinaService {
    vinaChanged = new Subject<Vina[]>();
    private vina: Vina[] = [
        new Vina('Tempranillo', 'Crveno vino', '1,5L', 'Crveno vino proizvdeno u Spaniji', '100', 'http://www.vinoteka.co.rs/media/spanija/Spanska-vina-15.jpg'),
        new Vina('Mira', 'Crveno vino', '1,5L', 'Crveno vino proizvdeno u Spaniji', '120', 'http://www.vinoteka.co.rs/media/spanija/Spanska-vina-16.jpg')
    ]
    shoppingCart: Vina[] = [];
    shopingCartChanged = new Subject<Vina[]>();
    constructor() { }
    //shoping cart dodavanje
    addShoppingCart(index: number) {
        this.shoppingCart.push(this.vina[index]);
        this.shopingCartChanged.next(this.shoppingCart.slice[index]);
    }
    getShoppingCart() {
        return this.shoppingCart.slice();
    }
    deleteShoppingCartItem(index:number){
        this.shoppingCart.splice(index,1);
        this.shopingCartChanged.next(this.shoppingCart.slice());
    }
    setVina(vina:Vina[]){
        this.vina=vina;
        this.vinaChanged.next(this.vina.slice());
    }
    getVina() {
        return this.vina.slice();
    }
    getVino(index: number) {
        return this.vina[index];
    }
    addVino(vina: Vina) {
        this.vina.push(vina);
        this.vinaChanged.next(this.vina.slice());
    }
    updateVino(index: number, newVino: Vina) {
        this.vina[index] = newVino;
        this.vinaChanged.next(this.vina.slice());
    }
    deleteVino(index: number) {
        this.vina.splice(index, 1);
        this.vinaChanged.next(this.vina.slice())
    }
}