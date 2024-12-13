import { useQuery } from "@tanstack/react-query";

import SearchBox from "../components/templates/SearchBox";
import ProductsBox from "../components/templates/ProductsBox";
import { getAllProducts } from "../services/products";

function ProductsPage() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["all-products"],
    queryFn: () => getAllProducts,
  });


  return (
    <div className="p-12">
      <div>
        <SearchBox />
      </div>
      <div>
        <div className="grid grid-cols-3 mt-10">
          <ProductsBox products={data} />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ProductsPage;
