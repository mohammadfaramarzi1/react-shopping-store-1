import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import SearchBox from "../components/templates/SearchBox";
import ProductsBox from "../components/templates/ProductsBox";
import { getAllProducts } from "../services/products";
import Category from "../components/templates/Category";
import { categories, filterProducts, searchProducts } from "../utils/utils";

function ProductsPage() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["all-products"],
    queryFn: () => getAllProducts,
  });

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [products, setProducts] = useState(() => {
    return data.data.filter(
      (product) => !product.title.toLowerCase().includes("new" || "test")
    );
  });
  const [mainProducts, setMainProducts] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  console.log(query);

  console.log(mainProducts);

  useEffect(() => {
    setMainProducts(products);
  }, []);

  console.log("P", mainProducts);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products.slice(0, 41), query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setMainProducts(finalProducts);
  }, [query]);

  const categoriesArray = categories;

  return (
    <div className="p-12">
      <div>
        <SearchBox
          search={search}
          setSearch={setSearch}
          query={query}
          setQuery={setQuery}
        />
      </div>
      <div className="flex justify-between mt-10">
        <div className="grid grid-cols-3 gap-6">
          <ProductsBox products={mainProducts} />
        </div>
        <div>
          <Category
            categories={categoriesArray}
            query={query}
            setQuery={setQuery}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
