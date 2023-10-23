import { BookingInterface } from 'interfaces/booking';
import { BusInterface } from 'interfaces/bus';
import { GetQueryInterface } from 'interfaces';

export interface RouteInterface {
  id?: string;
  start_point: string;
  end_point: string;
  bus_id: string;
  departure_time: any;
  arrival_time: any;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  bus?: BusInterface;
  _count?: {
    booking?: number;
  };
}

export interface RouteGetQueryInterface extends GetQueryInterface {
  id?: string;
  start_point?: string;
  end_point?: string;
  bus_id?: string;
}
