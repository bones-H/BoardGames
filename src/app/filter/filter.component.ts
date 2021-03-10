import {Component, Input, EventEmitter, Output} from '@angular/core';

import {FormControl, FormGroup} from '@angular/forms';
import {IFilterForm} from '../interface';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  filterForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    bought: new FormControl(null),
  });
  @Output() pushFilterForm = new EventEmitter<IFilterForm>();

  createFilterForm() {
    this.pushFilterForm.emit(this.filterForm.value);
  }
}
