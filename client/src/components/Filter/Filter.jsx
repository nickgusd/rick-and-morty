import PropTypes from "prop-types";
import { Wrapper } from "./Filter.js";

import DropdownComponent from "../Dropdown/Dropdown.jsx";

export const Filter = ({ onChange, currentValue, options, type, value }) => {
  return (
    <Wrapper>
      <DropdownComponent
        options={options}
        onChange={onChange}
        currentValue={currentValue}
        type={type}
        value={value}
      />
    </Wrapper>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  currentValue: PropTypes.string,
  options: PropTypes.array,
  type: PropTypes.string,
  value: PropTypes.string,
};
 