export interface Journey {
    id: string,
    departure_station_name: string,
    return_station_name: string, 
    distance: number,
    duration: number
}

export interface Station {
    id: string,
    station_name_fi: string,
    station_address_fi: string,
    departures: number,
    returns: number
}

export interface JourneyArray {
    routes: Journey[]
    count: number
}

export interface StationArray {
    stations: Station[]
    count: number
}