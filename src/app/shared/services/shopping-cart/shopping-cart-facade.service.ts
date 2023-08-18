import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { ICartItem } from '../../domain/interfaces/ICartItem';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartFacadeService {


  private cart: BehaviorSubject<ICartItem[]> = new BehaviorSubject<ICartItem[]>([]);
  public cart$: Observable<ICartItem[]> = this.cart.asObservable();


  public setCartItem(item: ICartItem) {
    const cartIndex = this.getCartIndex(item.id, item.date);
    if(cartIndex !== -1) {
      const newCart = this.cart.getValue();
      if(item.amount <= 0) newCart.splice(cartIndex, 1)
      else newCart.splice(cartIndex, 1, item);
      this.cart.next(newCart)
    } else {
      this.cart.next([...this.cart.getValue(), item]);
    }
  }

  public getGroupedCartItems(items: ICartItem[]): any {
    const uniqueItems = [...new Set(items.map(item => item.id))];
    const groupedItems = uniqueItems.map(uItem => ({
      id: uItem,
      title: items.find(item => item.id === uItem)?.title,
      sessions: this.cart.getValue().filter(cartItem => cartItem.id === uItem)
    }))
    return groupedItems;
  }

  public getCartIndex(cartId: string, date: string): number {
    return this.cart.getValue().findIndex(cart => cart.id === cartId && cart.date === date);
  }

  public getElementByIdAndDate(id: string, date:string): ICartItem | undefined {
    return this.cart.getValue().find(item => item.id === id && item.date === date);
  }

}
