import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ISortOption } from '../../domain/interfaces/IsortOption';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
  ]
})
export class SortComponent implements AfterViewInit {

  @Input() public options: ISortOption[] = [];
  @Input() public value!: string;
  @Output() private onSortChange: EventEmitter<string> = new EventEmitter();

  public ngAfterViewInit(): void {
      if(!this.value && this.options.length) this.value = this.options.at(0)?.value!;
  }

  public handleSelectorChange(): void {
    this.onSortChange.emit(this.value);
  }

}
