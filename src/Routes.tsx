import { BrowserRouter, Routes as R, Route } from "react-router-dom";
import { Index } from "./pages/admin/Index";

export const Routes = () => {
  return (
    <BrowserRouter>
      <R>
        <Route path="/" element={<Index />} />
      </R>
    </BrowserRouter>
  );
};
