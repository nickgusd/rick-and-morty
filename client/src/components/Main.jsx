import Locations from '../pages/Locations';
import Characters from '../pages/Characters';

import { Container } from './Main';

import { Routes, Route } from 'react-router-dom';

export default function Main() {
  return (
    <Container>
      {/* <Locations /> */}
      <Routes>
        <Route path="/" element={<Locations />} />
        {/* <Route index element={<Loca />} /> */}
        <Route path="location" element={<Locations />} />
        <Route path="characters" element={<Characters />} />
        {/* <Route path="dashboard" element={<Dashboard />} /> */}

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Container>
  );
}
