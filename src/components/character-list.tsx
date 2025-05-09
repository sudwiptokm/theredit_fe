import CharacterCard from "@/components/character-card";
import Pagination from "@/components/pagination";
import { getCharacters } from "@/lib/api";

export default async function CharacterList({
  searchParams,
}: {
  searchParams?: { search?: string; page?: string };
}) {
  const searchQuery = searchParams?.search || "";
  const pageNumber = Number(searchParams?.page) || 1;

  const { characters, totalPages } = await getCharacters(
    searchQuery,
    pageNumber
  );

  if (characters.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-gray-400">No characters found</p>
        {searchQuery && (
          <p className="text-gray-500 mt-2">
            Try a different search term or browse all characters
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((character) => (
          <CharacterCard key={character.name} character={character} />
        ))}
      </div>

      <Pagination currentPage={pageNumber} totalPages={totalPages} />
    </div>
  );
}
