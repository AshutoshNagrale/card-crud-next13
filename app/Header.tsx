import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="mb-2">
      <nav className=" p-5 bg-blue-500">
        <Link href="/" className="bg-white text-blue-600 px-2 py-1 rounded-md">
          Home
        </Link>
        <Link
          href="/todos"
          className="bg-white text-blue-600 ml-2 px-2 py-1 rounded-md"
        >
          Todos
        </Link>{" "}
        <Link
          href="/search"
          className="bg-white text-blue-600 ml-2 px-2 py-1 rounded-md"
        >
          Search
        </Link>
      </nav>
    </div>
  );
}

export default Header;
