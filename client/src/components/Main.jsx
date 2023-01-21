import { Routes, Route } from "react-router-dom";

import Locations from "../pages/Locations";
import Characters from "../pages/Characters";
import Character from "../pages/Character";
import Episodes from "../pages/Episodes";
import Episode from "../pages/Episode";

import { Navbar } from "./Navbar/Navbar.jsx";
import { Sidebar } from "./Sidebar/Sidebar.jsx";
import { Container } from "./Main";

export default function Main() {
  return (
    <Container>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="location" element={<Locations />} />
        <Route path="location/:id" element={<Locations />} />
        <Route path="characters" element={<Characters />} />
        <Route path="character/:id" element={<Character />} />
        <Route path="episodes" element={<Episodes />} />
        <Route path="episode/:id" element={<Episode />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Container>
  );
}
