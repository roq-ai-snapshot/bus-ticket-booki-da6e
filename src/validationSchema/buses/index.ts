import * as yup from 'yup';

export const busValidationSchema = yup.object().shape({
  bus_number: yup.string().required(),
  capacity: yup.number().integer().required(),
  bus_model: yup.string().required(),
  bus_brand: yup.string().required(),
  company_id: yup.string().nullable().required(),
});
