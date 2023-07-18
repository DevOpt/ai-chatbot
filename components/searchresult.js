import Image from "next/image";
import React from "react";
import Container from "./container";

const SearchResult = (props) => {
  const { data } = props;
  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap items-center justify-center">
        
        <div className="block max-w-lx p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>

      </Container>
    </>
  );
};


export default SearchResult;
