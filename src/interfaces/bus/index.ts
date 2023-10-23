import { RouteInterface } from 'interfaces/route';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface BusInterface {
  id?: string;
  bus_number: string;
  capacity: number;
  company_id: string;
  bus_model: string;
  bus_brand: string;
  created_at?: any;
  updated_at?: any;
  route?: RouteInterface[];
  company?: CompanyInterface;
  _count?: {
    route?: number;
  };
}

export interface BusGetQueryInterface extends GetQueryInterface {
  id?: string;
  bus_number?: string;
  company_id?: string;
  bus_model?: string;
  bus_brand?: string;
}
