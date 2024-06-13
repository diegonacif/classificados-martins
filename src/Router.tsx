import { Route, Routes } from "react-router-dom";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { Home } from "./pages/Home";
import { AdDetails } from "./pages/AdDetails";

export function Router() {
  useScrollToTop();

  return (
    <Routes>
      <Route>
        <Route index element={<Home />} />
        <Route path="/:adId" element={<AdDetails />} />
      </Route>
    </Routes>
  )
}