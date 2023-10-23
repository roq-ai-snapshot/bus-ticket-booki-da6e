import * as yup from 'yup';

export const ticketValidationSchema = yup.object().shape({
  ticket_number: yup.string().required(),
  price: yup.number().integer().required(),
  payment_status: yup.boolean().required(),
  booking_id: yup.string().nullable().required(),
});
