const findCategories = (array) => {
  return ["All", ...new Set(array.map((item) => item.category.name))];
};

export { findCategories };
