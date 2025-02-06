import { FiSearch } from "react-icons/fi";

const SearchInput = () => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2  bg-white shadow-sm">
      <FiSearch className="text-gray-500 text-lg" />
      <input
        type="text"
        placeholder="Search"
        className="ml-2 w-full outline-none bg-transparent text-gray-700"
      />
    </div>
  );
};

export default SearchInput;
