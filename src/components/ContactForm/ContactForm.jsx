import { Formik } from 'formik';
import { FormContext } from 'components/ContactForm/FormContext';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const ContactForm = ({ handleAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    handleAddContact({ id: nanoid(), ...values });
    resetForm();
  };
  const validationSchema = yup.object().shape({
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

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormContext />
    </Formik>
  );
};

ContactForm.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
};
