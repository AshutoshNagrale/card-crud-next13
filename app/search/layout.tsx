import Search from "./Search";

export const metadata = {
  title: "Search Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //space - controlling the space between child elements.
    // divide - controlling the border width between elements.
    <main className="flex space-x-4 divide-x-2">
      <div>
        <h1>Search</h1>
      </div>
      {/* flex-1 to allow a flex item to grow and shrink as needed, 
      ignoring its initial size: */}
      <div className="flex-1 pl-5">
        <Search />
        <div>{children}</div>
      </div>
    </main>
  );
}
