import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { EventsFacadeService } from '../../services/events/events-facade.service';
import { sortOptions } from '../../../../shared/constants/sortOptions';
import { ISortOption } from 'src/app/shared/domain/interfaces/IsortOption';
import { IEvent } from '../../domain/interfaces/event.interface';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsListComponent {

  private eventsFacade_ = inject(EventsFacadeService);

  public events: Observable<IEvent[]> = this.eventsFacade_.events$;
  public sortOptions: ISortOption[] = sortOptions;
  public isAscendingOrder: boolean = true;

  public handleSortChange(selectedOpt: string): void {
    this.isAscendingOrder = selectedOpt === 'asc';
  }

}
