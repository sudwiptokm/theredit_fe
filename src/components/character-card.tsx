import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CharacterDetails } from "@/lib/types";
import { CarFront, Film, Orbit, Rocket, Users } from "lucide-react";
import Link from "next/link";

export default function CharacterCard({
  character,
}: {
  character: CharacterDetails;
}) {
  return (
    <Link href={`/character/${character.id}`}>
      <Card className="bg-black border-gray-700 hover:border-yellow-400 card-hover transition-all duration-300 h-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl text-yellow-400 flex items-center gap-2">
            {character.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Film className="h-4 w-4 text-white/70" />
              <span className="truncate text-white">
                {character.films.length} films
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Orbit className="h-4 w-4 text-white/70" />
              <span className="truncate text-white">{character.homeworld}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Users className="h-4 w-4 text-white/70" />
              <span className="truncate text-white">{character.species}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <CarFront className="h-4 w-4 text-white/70" />
              <span className="truncate text-white">
                {character.vehicles.length} vehicles
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Rocket className="h-4 w-4 text-white/70" />
              <span className="truncate text-white">
                {character.starships.length} starships
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
