import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div>
      <nav className=" p-5 bg-blue-500">
        <Link href="/"  className="bg-white text-blue-400 px-2 py-1 rounded-md">
          Home
        </Link>
        <Link href="/todos" className="bg-white text-blue-400 ml-2 px-2 py-1 rounded-md">Todos</Link>
      </nav>
    </div>
  );
}

export default Header;
