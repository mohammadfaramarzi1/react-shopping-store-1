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
  return { query, newQuery };
};

export { categories, createQueryObject };
