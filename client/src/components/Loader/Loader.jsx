// import * as React from 'react';
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';

import { Dimmer, Loader, Image } from "semantic-ui-react";

const LoaderComponent = () => (
  <div>
    <Dimmer active inverted>
      <Loader size="massive">Loading</Loader>
    </Dimmer>

    <Image src="/images/wireframe/paragraph.png" />
  </div>
);

export default LoaderComponent;
