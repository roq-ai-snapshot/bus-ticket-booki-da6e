import { TicketInterface } from 'interfaces/ticket';
import { UserInterface } from 'interfaces/user';
import { RouteInterface } from 'interfaces/route';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  user_id: string;
  route_id: string;
  booking_date: any;
  seat_number: number;
  created_at?: any;
  updated_at?: any;
  ticket?: TicketInterface[];
  user?: UserInterface;
  route?: RouteInterface;
  _count?: {
    ticket?: number;
  };
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  route_id?: string;
}
