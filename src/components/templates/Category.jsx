import { BiCategoryAlt } from "react-icons/bi";

function Category({ categories }) {
  return (
    <div className="border-2 border-zinc-800 p-5 w-52 h-80">
      <div className="flex items-center gap-x-2 mb-5">
        <BiCategoryAlt className="text-violet-500" />
        <h3 className="text-xl font-medium">Categories</h3>
      </div>
      <ul className="flex flex-col gap-y-4">
        {categories.map((category) => (
          <li className="pl-3 relative selected cursor-pointer text-xl font-medium bg-gradient-to-r from-zinc-800 to-zinc-950">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;