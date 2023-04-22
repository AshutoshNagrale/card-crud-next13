"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function Search() {
  const route = useRouter();
  const [search, setSearch] = useState("");

  async function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearch("");
    route.push(`/search/${search}`);
  }
  return (
    <form onSubmit={handleSearch}>
      <input
        className="outline-blue-400 p-1 mr-3"
        type="text"
        value={search}
        placeholder="Enter the seacrh term"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white 
      px-4 py-2 rounded-md font-semibold"
      >
        Search
      </button>
    </form>
  );
}

export default Search;
