import {
  PlasmicRootProvider,
  PlasmicComponent,
} from "@plasmicapp/loader-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { PLASMIC } from "./plasmic-init";

function App() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <Router>
        <Routes>
          <Route path="/" element={CatchAllPage()} />
        </Routes>
      </Router>
    </PlasmicRootProvider>
  );
}

export function CatchAllPage() {
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    async function load() {
      const pageData = await PLASMIC.maybeFetchComponentData(
        location.pathname + location.search
      );
      setPageData(pageData);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!pageData) {
    return <div>Not found</div>;
  }
  // The page will already be cached from the `load` call above.
  return <PlasmicComponent component={location.pathname + location.search} />;
}

export default App;
