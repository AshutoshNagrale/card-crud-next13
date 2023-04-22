import { log } from "console";
import { Roboto } from "next/font/google";
import React from "react";

const roboto = Roboto({
  //subsets : '"cyrillic" | "cyrillic-ext" | "greek" | "greek-ext" | "latin" | "latin-ext" | "vietnamese"'
  subsets: ["greek-ext"],
  weight: "500",
});
type PageProps = {
  params: {
    searchTerm: string;
  };
};

type SearchResult = {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snippet: string;
    }
  ];
};

async function Search(searchTerm: string) {
  try {
    const res = await fetch(
      `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
    );
    //   throw new Error("Something went absolutely wrong");
    const data: SearchResult = await res.json();
    return data;
  } catch (error) {
    throw new Error("Something went absolutely wrong");
  }
}
async function SearchResult({ params: { searchTerm } }: PageProps) {
  const searchResults = await Search(searchTerm);

  return (
    <div>
      <div>This is my SearchResult Page</div>
      <div className="font-bold text-sm text-gray-400">
        You Searched For : {searchTerm}
      </div>
      <ol className="space-y-5 p-5">
        {searchResults.organic_results?.map((result) => (
          <li key={result.position} className="list-decimal">
            <p className={roboto.className}>{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SearchResult;
