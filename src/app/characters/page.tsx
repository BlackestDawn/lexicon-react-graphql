import { Suspense } from "react";
import { fetcher } from "@/lib/data/config";
import ItemGrid from "@/components/grid/itemGrid";
import CharacterCard from "@/components/grid/characterCard";

interface miniChar {
  id: number;
  name: string;
  image: string | null;
}

interface responseData {
  data: {
    characters: {
      edges: miniChar[];
    }
  }
}

export default async function CharacterGrid() {
  const query = `
    query getCharacters {
      characters {
        edges {
          id
          name
          image
        }
      }
    }`;
  const chars: responseData = await fetcher(query);

  console.dir(chars, { depth: null })
  return (
    <Suspense fallback={<div>Fetching characters...</div>} >
      <ItemGrid items={chars.data.characters.edges} CardComponent={CharacterCard} pathComponent="characters" />
    </Suspense>
  )
}
