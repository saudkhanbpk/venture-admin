import React from "react";

function BlogCards() {
  return (
    <>
      <div className="flex md:flex-row flex-col gap-5 md:px-8 px-4">
        <div className="md:w-[24vw] h-[300px] border border-gray-100 rounded-xl shadow-xl"></div>
        <div className="md:w-[24vw] h-[300px] border border-gray-100 rounded-xl shadow-xl"></div>
        <div className="md:w-[24vw] h-[300px] border border-gray-100 rounded-xl shadow-xl"></div>
      </div>
    </>
  );
}

export default BlogCards;
