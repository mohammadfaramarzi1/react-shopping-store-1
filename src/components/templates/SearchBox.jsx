import { CgSearch } from "react-icons/cg";

import { createQueryObject } from "../../utils/utils";

function SearchBox({ search, setSearch, query, setQuery }) {
  const clickHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  return (
    <div className="flex items-center gap-x-2 border-2 border-zinc-800 p-2 w-full sm:w-80 rounded-md">
      <button
        onClick={clickHandler}
        className="bg-violet-500 w-7 h-7 flex items-center justify-center rounded-md text-xl"
      >
        <CgSearch />
      </button>
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent w-full focus:outline-none py-1 text-md"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
    </div>
  );
}

export default SearchBox;
