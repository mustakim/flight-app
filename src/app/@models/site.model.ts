export interface IFlightSearchRequestModel {
  DepartureAirportCode: string;
  ReturnAirportCode: string;
  DepartureDate: Date | string;
  ReturnDate: Date | string;
}


export interface IFlightSearchResponseModel {
  AirlineLogoAddress: string,
  AirlineName: string,
  InboundFlightsDuration: string,
  ItineraryId: string,
  OutboundFlightsDuration: string,
  Stops: number,
  TotalAmount: number
}
