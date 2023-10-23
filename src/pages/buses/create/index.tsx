import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { busValidationSchema } from 'validationSchema/buses';
import { CompanyInterface } from 'interfaces/company';
import { BusInterface } from 'interfaces/bus';

function BusCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: BusInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.bus.create({ data: values as RoqTypes.bus });
      resetForm();
      router.push('/buses');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<BusInterface>({
    initialValues: {
      bus_number: '',
      capacity: 0,
      bus_model: '',
      bus_brand: '',
      company_id: (router.query.company_id as string) ?? null,
    },
    validationSchema: busValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Buses',
              link: '/buses',
            },
            {
              label: 'Create Bus',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Bus
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.bus_number}
            label={'Bus Number'}
            props={{
              name: 'bus_number',
              placeholder: 'Bus Number',
              value: formik.values?.bus_number,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Capacity"
            formControlProps={{
              id: 'capacity',
              isInvalid: !!formik.errors?.capacity,
            }}
            name="capacity"
            error={formik.errors?.capacity}
            value={formik.values?.capacity}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('capacity', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.bus_model}
            label={'Bus Model'}
            props={{
              name: 'bus_model',
              placeholder: 'Bus Model',
              value: formik.values?.bus_model,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.bus_brand}
            label={'Bus Brand'}
            props={{
              name: 'bus_brand',
              placeholder: 'Bus Brand',
              value: formik.values?.bus_brand,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<CompanyInterface>
            formik={formik}
            name={'company_id'}
            label={'Select Company'}
            placeholder={'Select Company'}
            fetcher={() => roqClient.company.findManyWithCount({})}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/buses')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'bus',
    operation: AccessOperationEnum.CREATE,
  }),
)(BusCreatePage);
