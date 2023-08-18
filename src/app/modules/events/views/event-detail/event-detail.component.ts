import { ChangeDetectionStrategy, Component, OnInit, inject,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { faWarning } from '@fortawesome/free-solid-svg-icons';

import { EventsFacadeService } from '../../services/events/events-facade.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventDetailComponent implements OnInit, OnDestroy {

  private eventsFacade_ = inject(EventsFacadeService);
  private activeRoute_ = inject(ActivatedRoute);

  public selectedEvent = this.eventsFacade_.selectedEvent$;
  public warningIcon = faWarning;
  private subscriptions: Subscription[] = [];

  public ngOnDestroy(): void  {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  public ngOnInit(): void {
    this.subscriptions.push(
      this.activeRoute_.params.subscribe(({id}) => {
        this.eventsFacade_.loadEventinfoById(id);
      })
    );
  }

}
