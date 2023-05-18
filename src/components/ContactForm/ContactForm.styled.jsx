import styled from '@emotion/styled';

import { Form, Field, ErrorMessage } from 'formik';

export const Forma = styled(Form)`
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  width: 460px;
  padding: 50px 20px;
  // border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  // background-color: white;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 26px;
  font-weight: bold;
`;

export const Input = styled(Field)`
  padding: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-size: 24px;
  width: 100%;
  margin-top: 5px;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4);
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #444;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: #333;
    transform: scale(1.05);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const Error = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
  margin-top: 5px;
  max-width: 200px;
`;

