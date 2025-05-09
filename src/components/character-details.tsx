import FilmList from "@/components/film-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getCharacterDetails } from "@/lib/api";
import { capitalizeFirstLetter } from "../lib/utils";

export default async function CharacterDetails({ id }: { id: string }) {
  const character = await getCharacterDetails(id);

  if (!character) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-yellow-400 mb-2">
          Character Not Found
        </h2>
        <p className="text-gray-400">
          The character you&apos;re looking for doesn&apos;t exist or was
          deleted.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-yellow-400 mb-2">
          {character.name}
        </h1>
        <p className="text-gray-400">Character details and information</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl text-yellow-400">
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-400">Birth Year</h3>
              <p className="text-white">{character.birth_year}</p>
            </div>
            <Separator className="bg-gray-700" />
            <div>
              <h3 className="text-sm font-medium text-gray-400">Gender</h3>
              <p className="text-white">
                {capitalizeFirstLetter(character.gender)}
              </p>
            </div>
            <Separator className="bg-gray-700" />
            <div>
              <h3 className="text-sm font-medium text-gray-400">Height</h3>
              <p className="text-white">{character.height} cm</p>
            </div>
            <Separator className="bg-gray-700" />
            <div>
              <h3 className="text-sm font-medium text-gray-400">Mass</h3>
              <p className="text-white">{character.mass} kg</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl text-yellow-400">
              Physical Attributes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-400">Eye Color</h3>
              <p className="text-white">
                {capitalizeFirstLetter(character.eye_color)}
              </p>
            </div>
            <Separator className="bg-gray-700" />
            <div>
              <h3 className="text-sm font-medium text-gray-400">Hair Color</h3>
              <p className="text-white">
                {capitalizeFirstLetter(character.hair_color)}
              </p>
            </div>
            <Separator className="bg-gray-700" />
            <div>
              <h3 className="text-sm font-medium text-gray-400">Skin Color</h3>
              <p className="text-white">
                {capitalizeFirstLetter(character.skin_color)}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-900 border-gray-700">
        <CardHeader>
          <CardTitle className="text-xl text-yellow-400">Films</CardTitle>
        </CardHeader>
        <CardContent>
          <FilmList films={character.films} />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl text-yellow-400">Homeworld</CardTitle>
          </CardHeader>
          <CardContent>
            <div id="homeworld" className="py-2 text-white">
              {character.homeworld}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl text-yellow-400">Species</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="truncate text-white">{character.species}</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
