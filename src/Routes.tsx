import { BrowserRouter, Routes as R, Route } from "react-router-dom";
import { Index } from "./pages/admin/Index";
import { Sheet } from "./pages/sheet/Index";

export const Routes = () => {
  return (
    <BrowserRouter>
      <R>
        <Route path="/" element={<Index />} />
        <Route index path="sheet/" element={<Sheet />} />
        <Route index path="sheet/:nameBook" element={<Sheet />} />
      </R>
    </BrowserRouter>
  );
};
