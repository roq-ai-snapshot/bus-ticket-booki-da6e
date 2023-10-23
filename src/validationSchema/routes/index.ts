import * as yup from 'yup';

export const routeValidationSchema = yup.object().shape({
  start_point: yup.string().required(),
  end_point: yup.string().required(),
  departure_time: yup.date().required(),
  arrival_time: yup.date().required(),
  bus_id: yup.string().nullable().required(),
});
