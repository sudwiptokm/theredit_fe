"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { debounce } from "lodash";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );

  const createSearchURL = useCallback(
    (query: string) => {
      // Create a new URLSearchParams object to avoid mutating the original
      const params = new URLSearchParams(searchParams.toString());

      // Only reset to page 1 if the search query has changed
      const currentSearch = searchParams.get("search") || "";
      if (query !== currentSearch) {
        params.set("page", "1");
      }

      if (query) {
        params.set("search", query);
      } else {
        params.delete("search");
      }

      return `/?${params.toString()}`;
    },
    [searchParams]
  );

  const debouncedSearch = useCallback(
    (query: string) => {
      const handler = debounce(() => {
        router.push(createSearchURL(query));
      }, 500);
      handler();
      return handler;
    },
    [router, createSearchURL]
  );

  useEffect(() => {
    let handler: ReturnType<typeof debounce> | undefined;

    const currentSearch = searchParams.get("search") || "";
    if (searchQuery.trim() !== currentSearch) {
      handler = debouncedSearch(searchQuery);
    }

    return () => {
      handler?.cancel();
    };
  }, [searchQuery, debouncedSearch, searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Cancel any pending debounced searches
    const handler = debouncedSearch(searchQuery);
    handler.cancel();
    router.push(createSearchURL(searchQuery));
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full max-w-lg mx-auto gap-2"
    >
      <Input
        type="text"
        placeholder="Search characters..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="bg-black/80 border-yellow-400 focus-visible:ring-0 focus-visible:border-yellow-400 
        focus-visible:border-2 outline-none text-white placeholder:text-gray-500"
      />
      <Button
        type="submit"
        variant="outline"
        className="border-yellow-400 text-black bg-yellow-400/90 hover:bg-yellow-400/80 cursor-pointer"
      >
        <Search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>
    </form>
  );
}
