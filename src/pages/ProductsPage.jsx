import { useQuery } from "@tanstack/react-query";

import SearchBox from "../components/templates/SearchBox";
import ProductsBox from "../components/templates/ProductsBox";
import { getAllProducts } from "../services/products";
import Category from "../components/templates/Category";
import { categories } from "../utils/utils";
import { useState } from "react";

function ProductsPage() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["all-products"],
    queryFn: () => getAllProducts,
  });

  const [search, setSearch] = useState("")

  const categoriesArray = categories;

  return (
    <div className="p-12">
      <div>
        <SearchBox search={search} setSearch={setSearch} />
      </div>
      <div className="flex justify-between mt-10">
        <div className="grid grid-cols-3 gap-6">
          <ProductsBox products={data} />
        </div>
        <div>
          <Category categories={categoriesArray} />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
