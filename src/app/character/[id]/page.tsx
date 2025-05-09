import CharacterDetails from "@/components/character-details";
import { LoadingSpinner } from "@/components/loading-spinner";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
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
        <Link href="/">
          <Button
            variant="outline"
            className="mb-6 border-yellow-400 text-yellow-400 hover:bg-yellow-400/90 bg-yellow-400/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all characters
          </Button>
        </Link>

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
