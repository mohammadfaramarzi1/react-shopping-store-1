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

  useEffect(() => {
    setMainProducts(products);
  }, []);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products.slice(0, 49), query.search);
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
      <div className="flex flex-col-reverse sm:flex-row justify-between mt-10">
        <div className="flex items-center justify-center flex-wrap gap-6">
          {mainProducts.length === 0 ? (
            <h2 className="w-[800px] flex items-center justify-center text-3xl text-violet-500 font-bold">
              There is no products related...
            </h2>
          ) : (
            ""
          )}
          {mainProducts.map((product) => (
            <ProductsBox product={product} key={product.id} />
          ))}
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
