import { Component, OnInit } from '@angular/core';
import { IFlightSearchRequestModel } from '@models/site.model';
import { IFlightSearchResponseModel } from '@models/site.model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { FlightService } from '@services/flight.service';

@UntilDestroy()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  flightData: IFlightSearchResponseModel[] = [];
  flightFilter: IFlightSearchRequestModel;
  pageNumber: number = 0;

  constructor(private flightService: FlightService) {
  }

  ngOnInit(): void {
  }
  onPageChange(event) {
    this.pageNumber = event
  }

  handleSearchClick(filter: IFlightSearchRequestModel) {
    this.flightFilter = filter;
    this.flightService.getFlightList(filter).subscribe((data) => {
      this.flightData = data;
    })
  }
}
