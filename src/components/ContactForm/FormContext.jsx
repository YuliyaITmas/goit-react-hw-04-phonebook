import { useFormikContext } from 'formik';

import {
  Forma,
  Label,
  Input,
  Button,
  Error,
} from 'components/ContactForm/ContactForm.styled';

export const FormContext = () => {
  const {
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    isValid,
    dirty,
    handleSubmit,
  } = useFormikContext();

  return (
    <Forma onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          id="name"
          type="text"
          placeholder="Enter name"
          name="name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.name}
          pattern="^[А-Яа-яЁёіІїЇґҐa-zA-Z]+([-\s][А-Яа-яЁёіІїЇґҐa-zA-Z]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        {errors.name && touched.name && <Error>{errors.name}</Error>}
        <Error name="name" component="div" />
      </Label>
      <Label>
        Number
        <Input
          id="number"
          type="tel"
          placeholder="Enter number"
          name="number"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        {errors.number && touched.number && <Error>{errors.number}</Error>}
        <Error name="number" component="div" />
      </Label>

      <Button type="submit" disabled={!dirty || !isValid}>
        Add contact
      </Button>
    </Forma>
  );
};
