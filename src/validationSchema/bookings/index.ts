import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  booking_date: yup.date().required(),
  seat_number: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  route_id: yup.string().nullable().required(),
});
