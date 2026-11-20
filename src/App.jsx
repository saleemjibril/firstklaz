import "./App.scss";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./components/About";
import Tour from "./components/Tour";
import Store from "./components/Store";
import Music from "./components/Music";
import Videos from "./components/Videos";
import Shows from "./components/Shows";
import ShowDetail from "./components/ShowDetail";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="tour" element={<Tour />} />
          <Route path="store" element={<Store />} />
          <Route path="music" element={<Music />} />
          <Route path="videos" element={<Videos />} />
          <Route path="shows" element={<Shows />} />
          <Route path="shows/:slug" element={<ShowDetail />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
