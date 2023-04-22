import { log } from "console";
import { Playfair_Display } from "next/font/google";
import React from "react";

const playfair_display = Playfair_Display({
  subsets: ["cyrillic"],
  weight: "700",
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
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );
  const data: SearchResult = await res.json();
  return data;
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
            <p className={playfair_display.className}>{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SearchResult;
