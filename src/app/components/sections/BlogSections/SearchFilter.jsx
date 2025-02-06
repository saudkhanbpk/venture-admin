// "use client";
// import React from "react";
// import { IoFilter } from "react-icons/io5";
// import { IoMdAdd } from "react-icons/io";
// import SearchInput from "../../common/SearchInput";

// function SearchFilter() {
//   return (
//     <>
//       <div className="flex justify-between items-center px-8 py-20">
//         <div>
//           <SearchInput />
//         </div>

//         <button className="bg-[#000AFF] px-3 py-2 flex items-center gap-2 rounded-md">
//           <IoMdAdd color="#fff" size={18} />
//           <span className="text-white">Add Blog</span>
//         </button>
//       </div>
//     </>
//   );
// }

// export default SearchFilter;


"use client";
import React from "react";
import { IoFilter } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import SearchInput from "../../common/SearchInput";
import { useRouter } from "next/navigation";

function SearchFilter() {
  const router = useRouter();

  const handleAddBlog = () => {
    router.push('/addNewBlog'); 
  };

  return (
    <>
      <div className="flex justify-between items-center px-8 py-20">
        <div>
          <SearchInput />
        </div>

        <button 
          onClick={handleAddBlog}
          className="bg-[#000AFF] px-3 py-2 flex items-center gap-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          <IoMdAdd color="#fff" size={18} />
          <span className="text-white">Add Blog</span>
        </button>
      </div>
    </>
  );
}

export default SearchFilter;