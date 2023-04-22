import React from "react";

type PageProps = {
  params: {
    searchTerm: string;
  };
};
async function SearchResult({ params: { searchTerm } }: PageProps) {
  return (
    <div>
      <div>This is my SearchResult Page</div>
      <div>You Searched For {searchTerm}</div>
    </div>
  );
}

export default SearchResult;
