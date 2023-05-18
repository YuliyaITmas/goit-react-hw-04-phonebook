import PropTypes from 'prop-types';
import { FilterContainer, FilterLabel, FilterInput } from "./Filter.styled"

export const Filter = ({ onChange, value }) => {
  return (
    <FilterContainer>
      <FilterLabel >
        Find contacts by name
        <FilterInput
          type="text"
          onChange={onChange}
          value={value}
          placeholder="Search contacts by name"
        />
      </FilterLabel>
    </FilterContainer>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
