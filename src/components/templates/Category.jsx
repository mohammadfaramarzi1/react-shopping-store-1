import { BiCategoryAlt } from "react-icons/bi";

import { createQueryObject } from "../../utils/utils";
import { useState } from "react";

function Category({ categories, query, setQuery }) {
  const [selected, setSelected] = useState("All");

  const clickHandler = (categoryName) => {
    const category = categoryName.toLowerCase();
    setSelected(categoryName);
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <div className="flex flex-col sm:block border-2 border-zinc-800 p-5 sm:w-52 my-5 sm:my-0">
      <div className="flex items-center gap-x-2 mb-5">
        <BiCategoryAlt className="text-violet-500" />
        <h3 className="text-xl font-medium">Categories</h3>
      </div>
      <ul className="flex flex-row flex-wrap justify-center sm:flex-col gap-4">
        {categories.map((category) => (
          <li
            key={category.id}
            className={`"pl-3 relative cursor-pointer text-xl font-medium bg-gradient-to-r from-zinc-800 to-zinc-950" ${
              selected === category.name ? "selected" : ""
            }`}
            onClick={() => clickHandler(category.name)}
          >
            {category.name === "Change title" ? "Decoration" : category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
