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
    <div className="border-2 border-zinc-800 p-5 w-52">
      <div className="flex items-center gap-x-2 mb-5">
        <BiCategoryAlt className="text-violet-500" />
        <h3 className="text-xl font-medium">Categories</h3>
      </div>
      <ul className="flex flex-col gap-y-6">
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
