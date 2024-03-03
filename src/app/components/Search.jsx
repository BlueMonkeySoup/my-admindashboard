"use client";

import { MdSearch } from "react-icons/md";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  // const handleSearch = useDebouncedCallback((e)=>{
  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);

    if (e.target.value) {
      params.set("query", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  };
  // ,300)

  return (
    <div className="flex space-x-4 p-2 mb-8">
      <MdSearch className="mt-2 h-8 w-8" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-2/3 p-2 text-lg text-gray-700 bg-white rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
        onChange={handleSearch}
      />
    </div>
  );
};
export default Search;
