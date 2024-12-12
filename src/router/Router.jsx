import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import CheckOutPage from "../pages/CheckOutPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProductsPage from "../pages/ProductsPage";

function Router() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/checkout" element={<CheckOutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
