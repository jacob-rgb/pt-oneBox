import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { map } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faBagShopping } from '@fortawesome/free-solid-svg-icons';

import { ShoppingCartFacadeService } from '../../services/shopping-cart/shopping-cart-facade.service';
import { ICartItem } from '../../domain/interfaces/ICartItem';

@Component({
  selector: 'app-shopping-cart',
  imports: [
    CommonModule,
    AsyncPipe,
    FontAwesomeModule
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class ShoppingCartComponent {

  private cartFacade_ = inject(ShoppingCartFacadeService);

  public trashIcon = faTrash;
  public shoppingCartIcon = faBagShopping;
  public cart = this.cartFacade_.cart$.pipe(
    map(
      items => this.cartFacade_.getGroupedCartItems(items)
    )
  );

  public removeElement(item: ICartItem): void {
    this.cartFacade_.setCartItem({
      amount: item.amount - 1,
      id: item.id,
      date: item.date,
      title: item.title
    });
  }


}
