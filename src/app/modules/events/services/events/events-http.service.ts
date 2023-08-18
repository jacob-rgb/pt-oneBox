import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IEvent } from '../../domain/interfaces/event.interface';
import { IEventData } from '../../domain/interfaces/event-data.interface';

@Injectable({
  providedIn: 'root'
})
export class EventsHttpService {

  private http_ = inject(HttpClient);

  private apiUrl = environment.apiUrl;
  private suffix = '.json'
  private endpoints: {[key: string]: string} = {
    list: "/assets/mocked-data/events",
    detail: "/assets/mocked-data/event-info-"
  }

  public getEvents(): Observable<IEvent[]> {
    return this.http_.get<IEvent[]>(`${this.apiUrl}${this.endpoints['list']}${this.suffix}`)
  }

  public getEventInfo(id: string): Observable<IEventData> {
    return this.http_.get<IEventData>(`${this.apiUrl}${this.endpoints['detail']}${id}${this.suffix}`)
      .pipe(
        map(eventData => ({
          ...eventData,
          sessions: eventData.sessions.map(session =>
            ({ ...session, id: eventData.event.id, title: eventData.event.title }))
        }))
      )
  }

}
