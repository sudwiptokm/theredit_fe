import BackButton from "@/components/back-button";
import CharacterDetails from "@/components/character-details";
import { LoadingSpinner } from "@/components/loading-spinner";
import { Suspense } from "react";

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const characterId = (await params).id;

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <BackButton />

        <Suspense
          fallback={
            <div className="text-center py-20">
              <LoadingSpinner />
              <p className="mt-4 text-gray-400">Loading character details...</p>
            </div>
          }
        >
          <CharacterDetails id={characterId} />
        </Suspense>
      </div>
    </main>
  );
}
