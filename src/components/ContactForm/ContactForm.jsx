import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
// import { object, string, number, date, InferType } from 'yup';

import {
  Forma,
  Label,
  Input,
  Button,
  Error,
} from 'components/ContactForm/ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};
const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(30, 'Name must be at most 20 characters')
    .matches(
      /^[А-Яа-яЁёіІїЇґҐa-zA-Z]+([-\s][А-Яа-яЁёіІїЇґҐa-zA-Z]+)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required('Name is required'),
  number: yup
    .string()
    .min(7, 'Number must be at least 7 characters')
    .max(20, 'Number must be at most 13 characters')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Number is required'),
});

export const ContactForm = ({ handleAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    handleAddContact({ id: nanoid(), ...values });

    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {({ errors, touched, isValid, dirty }) => (
        <Forma>
          <Label>
            Name
            <Input
              type="text"
              placeholder="Enter name"
              name="name"
              pattern="^[А-Яа-яЁёіІїЇґҐa-zA-Z]+([-\s][А-Яа-яЁёіІїЇґҐa-zA-Z]+)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            {errors.name && touched.name && <Error>{errors.name}</Error>}
            <Error name="name" component="div" />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              placeholder="Enter number"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            {errors.number && touched.number && <Error>{errors.number}</Error>}
            <Error name="number" component="div" />
          </Label>

          <Button type="submit"  disabled={!dirty || !isValid} >Add contact</Button>
        </Forma>
      )}
    </Formik>
  );
};
ContactForm.propType = {
  handleAddContact: PropTypes.func.isRequired,
};
