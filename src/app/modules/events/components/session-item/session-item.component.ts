import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, inject } from '@angular/core';

import { Session } from '../../domain/interfaces/event-data.interface';
import { ShoppingCartFacadeService } from '../../../../shared/services/shopping-cart/shopping-cart-facade.service';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionItemComponent {

  private cartFacade_ = inject(ShoppingCartFacadeService);
  private cdRef_ = inject(ChangeDetectorRef);

  @Input() public sessionInfo!: Session;

  public count: number = 0;

  public ngOnInit(): void {
    this.cartFacade_.cart$.subscribe(() => {
      this.count = this.cartFacade_
      .getElementByIdAndDate(this.sessionInfo.id, this.sessionInfo.date)?.amount || 0
      this.cdRef_.markForCheck();
    })
  }

  public increaseCount(): void {
    if(this.count < Number(this.sessionInfo.availability)) {
      this.count++;
      this.setCartItem()
    }
  }

  public decreaseCount(): void {
    if(this.count > 0) {
      this.count--;
      this.setCartItem()
    }
  }

  private setCartItem(): void {
    this.cartFacade_.setCartItem({
      amount: this.count,
      id: this.sessionInfo.id,
      date: this.sessionInfo.date,
      title: this.sessionInfo.title
    });
  }

}
