import CharacterList from "@/components/character-list";
import { LoadingSpinner } from "@/components/loading-spinner";
import SearchBar from "@/components/search-bar";
import Image from "next/image";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams?: { search?: string; page?: string };
}) {
  // Extract values from searchParams before using them
  const { search, page } = (await Promise.resolve(searchParams)) || {};

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <Image
            src="/starwars.png"
            alt="Star Wars Logo"
            width={200}
            height={200}
            className="text-white mx-auto"
            priority
          />
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">
            Star Wars Character Explorer
          </h1>
          <p className="text-gray-400 mb-6">
            Discover characters from the Star Wars universe
          </p>
          <SearchBar />
        </header>

        <Suspense
          fallback={
            <div className="text-center py-20">
              <LoadingSpinner />
              <p className="mt-4 text-gray-400">Loading characters...</p>
            </div>
          }
        >
          <CharacterList searchParams={{ search, page }} />
        </Suspense>
      </div>
    </main>
  );
}
