import { CgSearch } from "react-icons/cg";

function SearchBox() {
  return (
    <div className="flex items-center gap-x-2 border-2 border-zinc-800 p-2 w-80 rounded-md">
      <button className="bg-violet-500 w-7 h-7 flex items-center justify-center rounded-md text-xl">
        <CgSearch />
      </button>
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent w-full focus:outline-none py-1 text-md"
      />
    </div>
  );
}

export default SearchBox;
