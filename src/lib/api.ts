import { CharacterDetails } from "@/lib/types";

export async function getCharacters(search: string, page = 1) {
  try {
    const response = await fetch(
      `${process.env.API_URL}/?&page=${page}&search=${search}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API error (${response.status}): ${errorText}`);
      return {
        characters: [],
        totalPages: 0,
        total: 0,
        error: `Failed to fetch characters: ${response.status}`,
      };
    }

    const data = await response.json();
    return {
      characters: data.characters as CharacterDetails[],
      totalPages: Math.ceil(data.total / 10) as number,
      total: data.total as number,
    };
  } catch (error) {
    console.error("Error in getCharacters:", error);
    return {
      characters: [],
      totalPages: 0,
      total: 0,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function getCharacterDetails(
  id: string
): Promise<CharacterDetails | null> {
  try {
    const response = await fetch(`${process.env.API_URL}/${id}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();

    return data as CharacterDetails;
  } catch (error) {
    console.error("Error in getCharacterDetails:", error);
    return null;
  }
}
