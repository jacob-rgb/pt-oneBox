import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { faLocation, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import { IEvent } from '../../domain/interfaces/event.interface';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventCardComponent {

  @Input() public eventInfo!: IEvent;

  public locationIcon = faLocation;
  public timeIcon = faCalendarAlt;

}
