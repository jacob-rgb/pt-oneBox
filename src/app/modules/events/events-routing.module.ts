import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsListComponent } from './views/events-list/events-list.component';
import { EventDetailComponent } from './views/event-detail/event-detail.component';

const routes: Routes = [
  {
    path: '',
    component: EventsListComponent
  },
  {
    path: ':id',
    component: EventDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
