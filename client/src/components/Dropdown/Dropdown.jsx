import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown, Menu } from 'semantic-ui-react';

const DropdownComponent = ({ onChange, options, currentValue, type }) => {
  return (
    <Menu compact>
      <Dropdown
        placeholder={currentValue || type}
        options={options}
        simple
        item
        onChange={onChange}
      />
    </Menu>
  );
};

export default DropdownComponent;

DropdownComponent.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
  currentValue: PropTypes.string,
  type: PropTypes.string
};
