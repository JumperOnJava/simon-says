import { createContext, useContext } from "react";

export type Page = "home" | "game" | "result";

interface PageContextType {
  page: Page;
  setPage: React.Dispatch<React.SetStateAction<Page>>;
}

export const PageContext = createContext<PageContextType | undefined>(
  undefined
);

export function useBasicNavigation() {
  const ctx = useContext(PageContext);
  if (!ctx) throw new Error("usePage must be used inside PageProvider");
  return ctx;
}
