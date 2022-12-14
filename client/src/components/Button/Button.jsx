/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'semantic-ui-react';

const ButtonComponent = ({ content = 'Search', onClick }) => (
  <div>
    <Button content={content} primary onClick={onClick} />
  </div>
);

export default ButtonComponent;
