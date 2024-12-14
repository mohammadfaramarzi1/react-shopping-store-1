const categories = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Clothes",
  },
  {
    id: 3,
    name: "Electronics",
  },
  {
    id: 4,
    name: "Decoration",
  },
  {
    id: 5,
    name: "Shoes",
  },
  {
    id: 6,
    name: "Miscellaneous",
  },
];

const createQueryObject = (query, newQuery) => {
  if (newQuery.search === "") {
    const { search, ...rest } = query;
    return rest;
  }
  if (newQuery.category === "all") {
    const { category, ...rest } = query;
    return rest;
  }
  return { ...query, ...newQuery };
};

const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );
  return searchedProducts;
};

const filterProducts = (products, category) => {
  if (!category || category == "all") return products;
  if (category === "decoration") {
    category = "change title";
  }
  const filteredProducts = products.filter(
    (product) => product.category.name.toLowerCase() === category
  );
  return filteredProducts;
};

const sumProducts = (products) => {
  const count = products.reduce((acc, cur) => acc + cur.quantity, 0);
  const totalPrice = products.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );
  return { count, totalPrice };
};

const sumQuantity = (products) => {
  const itemsCounter = products.reduce((acc, cur) => acc + cur.quantity, 0);
  return itemsCounter;
};

const productQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) return 0;
  return state.selectedItems[index].quantity;
};

export {
  categories,
  createQueryObject,
  filterProducts,
  searchProducts,
  sumProducts,
  sumQuantity,
  productQuantity,
};
