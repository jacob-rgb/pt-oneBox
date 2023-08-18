import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { EventsListComponent } from './views/events-list/events-list.component';
import { EventDetailComponent } from './views/event-detail/event-detail.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventCardComponent } from './components/event-card/event-card.component';
import { SessionItemComponent } from './components/session-item/session-item.component';
import { ShoppingCartComponent } from '../../shared/components/shopping-cart/shopping-cart.component';
import { DateSortPipe } from '../../shared/pipes/date-sort.pipe';
import { SortComponent } from '../../shared/components/sort/sort.component';


@NgModule({
  declarations: [
    EventsListComponent,
    EventDetailComponent,
    EventCardComponent,
    SessionItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EventsRoutingModule,
    ShoppingCartComponent,
    DateSortPipe,
    FontAwesomeModule,
    SortComponent
  ]
})
export class EventsModule { }
