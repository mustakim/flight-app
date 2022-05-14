
import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IFlightSearchRequestModel } from '../../../../@models/site.model';
import { MOMENT_TOKEN } from '@services/moment.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() searchFilter?: IFlightSearchRequestModel;
  @Output() closeClick = new EventEmitter();
  @Output() searchClick = new EventEmitter();

  searchForm: FormGroup;
  DepartureAirportCode: FormControl;
  ReturnAirportCode: FormControl;
  DepartureDate: FormControl;
  ReturnDate: FormControl;

  defaultMinDate: Date;

  constructor(@Inject(MOMENT_TOKEN) private moment: any) {
  }

  ngOnInit() {
    // asigning data
    this.DepartureAirportCode = new FormControl(this.searchFilter ? this.searchFilter.DepartureAirportCode : 'MEI',
      [Validators.required, Validators.minLength(3), Validators.maxLength(3)]);
    this.ReturnAirportCode = new FormControl(this.searchFilter ? this.searchFilter.ReturnAirportCode : 'LHR',
      [Validators.required, Validators.minLength(3), Validators.maxLength(3)]);
    this.DepartureDate = new FormControl(this.searchFilter ? new Date(this.searchFilter.DepartureDate) : '',
      [Validators.required]);
    this.ReturnDate = new FormControl(this.searchFilter ? new Date(this.searchFilter.ReturnDate) : '',
      [Validators.required]);

    this.defaultMinDate = this.moment().toDate();

    this.searchForm = new FormGroup({
      DepartureAirportCode: this.DepartureAirportCode,
      ReturnAirportCode: this.ReturnAirportCode,
      DepartureDate: this.DepartureDate,
      ReturnDate: this.ReturnDate
    });
  }

  handleSearch(formValues: IFlightSearchRequestModel) {
    if (this.searchForm.valid) {
      // conveting date to ISO format
      formValues.DepartureDate = (<Date>formValues.DepartureDate)?.toISOString();
      formValues.ReturnDate = (<Date>formValues.ReturnDate)?.toISOString();
      // emiting to home
      this.searchClick.emit(formValues);
    }
  }
}
