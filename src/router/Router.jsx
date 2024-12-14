import { Routes, Route } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import CheckOutPage from "../pages/CheckOutPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProductsPage from "../pages/ProductsPage";
import { getAllProducts } from "../services/products";
import Loader from "../components/modules/Loader";

function Router() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["all-products"],
    queryFn: () => getAllProducts,
  });
  if(isLoading) return <Loader />

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
