import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "./layout/Layout";
import Router from "./router/Router";
import defaultOptions from "./configs/reactQuery";
import ProductsProvider from "./context/ProductsContext";

function App() {
  const queryClient = new QueryClient({ defaultOptions });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ProductsProvider>
          <Layout>
            <Router />
          </Layout>
        </ProductsProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
