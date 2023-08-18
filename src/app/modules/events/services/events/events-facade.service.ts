import { Injectable, inject } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { EventsHttpService } from './events-http.service';
import { IEvent } from '../../domain/interfaces/event.interface';
import { IEventData } from '../../domain/interfaces/event-data.interface';

@Injectable({
  providedIn: 'root'
})
export class EventsFacadeService {

  private eventHttp_ = inject(EventsHttpService);

  private events: BehaviorSubject<IEvent[]> = new BehaviorSubject<IEvent[]>([]);
  public events$: Observable<IEvent[]> = this.events.asObservable();

  private selectedEvent: BehaviorSubject<IEventData | null>
    = new BehaviorSubject<IEventData | null>(null);
  public selectedEvent$: Observable<IEventData | null> = this.selectedEvent.asObservable();

  constructor() {
    if(!this.events.getValue().length) this.loadEvents();
  }

  public loadEventinfoById(id: string): void {
    this.eventHttp_.getEventInfo(id).subscribe({
      next: (event) => this.selectedEvent.next(event),
      error: (err) => {
        this.selectedEvent.next(null);
        throw new Error(err)
      }
    });
  }

  private setEvents(events: IEvent[]) {
    this.events.next(events);
  }

  private loadEvents(): void {
    this.eventHttp_.getEvents().subscribe({
      next: (events) => this.setEvents(events),
      error: (err) => { throw new Error(err) }
    })
  }

}
