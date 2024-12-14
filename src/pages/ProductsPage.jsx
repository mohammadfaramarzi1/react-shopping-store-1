import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import SearchBox from "../components/templates/SearchBox";
import ProductsBox from "../components/templates/ProductsBox";
import { getAllProducts } from "../services/products";
import Category from "../components/templates/Category";
import { categories } from "../utils/utils";
import { useSearchParams } from "react-router-dom";

function ProductsPage() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["all-products"],
    queryFn: () => getAllProducts,
  });

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  console.log(query);

  useEffect(() => {
    setSearchParams(query);
  }, [query]);

  const categoriesArray = categories;

  return (
    <div className="p-12">
      <div>
        <SearchBox search={search} setSearch={setSearch} query={query} setQuery={setQuery} />
      </div>
      <div className="flex justify-between mt-10">
        <div className="grid grid-cols-3 gap-6">
          <ProductsBox products={data} />
        </div>
        <div>
          <Category categories={categoriesArray} setQuery={setQuery} />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
