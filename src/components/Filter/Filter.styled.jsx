import styled from '@emotion/styled';

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
`;

export const FilterLabel = styled.label`
  font-size: 22px;
  font-weight: bold;
`;

export const FilterInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-size: 20px;
  width: 100%;
  max-width: 500px;
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
