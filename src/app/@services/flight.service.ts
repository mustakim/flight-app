import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { FLIGHT_API } from '../@models/site.constant';
import { IFlightSearchRequestModel, IFlightSearchResponseModel } from '../@models/site.model';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class FlightService {
  public DefaultPageSize = 10;
  public PageSizeOptions: number[] = [10, 25, 50];
  private API_URL = environment.apiURL;

  constructor(private httpClient: HttpClient) { }

  private UrlBuilder(endpoint: string, params?: object): string {
    const queryParams = params
      ? Object.keys(params)
        .map((key) => key + '=' + params[key])
        .join('&')
      : '';
    return `${this.API_URL}${endpoint}?${queryParams}`;
  }

  getFlightList(params?: IFlightSearchRequestModel): Observable<IFlightSearchResponseModel[]> {
    return this.httpClient.get<any>(this.UrlBuilder(FLIGHT_API.FLIGHT, params));
  }
}
