import { Route, Routes } from "react-router-dom";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { Home } from "./pages/Home";

export function Router() {
  useScrollToTop();

  return (
    <Routes>
      <Route>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}