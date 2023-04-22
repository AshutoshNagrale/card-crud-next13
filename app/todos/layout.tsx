import { Suspense } from "react";
import TodoList from "./TodoList";

export const metadata = {
  title: "Todos Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <div>
        {/* suspense acts as loading component */}
        <Suspense fallback={<p>Loading Todos</p>}>
          {/* @ts-ignore*/}
          <TodoList />
        </Suspense>
      </div>
      <div className="ml-2 flex-1">{children}</div>
    </main>
  );
}
