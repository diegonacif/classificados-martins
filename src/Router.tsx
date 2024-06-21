import { Route, Routes } from "react-router-dom";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { Home } from "./pages/Home";
import { AdDetails } from "./pages/AdDetails";
import { CreateAd } from "./pages/CreateAd";

export function Router() {
  useScrollToTop();

  return (
    <Routes>
      <Route>
        <Route index element={<Home />} />
        <Route path="/:adId" element={<AdDetails />} />
        <Route path="/createAd" element={<CreateAd />} />
      </Route>
    </Routes>
  )
}