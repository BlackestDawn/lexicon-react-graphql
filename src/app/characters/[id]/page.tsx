import { Suspense } from "react";
import { fetcher } from "@/lib/data/config";
import { IdParamProp } from "@/lib/interfaces/general";
import Image from "next/image";

type charStatus = "ALIVE" | "DEAD" | "UNKNOWN";
type charGender = "MALE" | "FEMALE" | "UNKNOWN";
type charSpecies = "HUMAN" | "ROBOT" | "HEAD" | "ALIEN" | "MUTANT" | "MONSTER" | "UNKNOWN";

interface ResponseData {
  data: {
      character: {
      id: number;
      name: string;
      status: charStatus;
      gender: charGender;
      species: charSpecies;
      image: string | null;
    }
  };
}

const fullCharacterInfo = `fragment AllInfo on Character {
  id
  name
  status
  gender
  species
  image
}`;

export default async function CharacterDetails({ params }: IdParamProp) {
  const { id } = await params;
  const query = `
    query getCharacter {
      character(characterId: ${id}) {
        ...AllInfo
      }
    }
    ${fullCharacterInfo},
  `;

  const { data: { character } } = await fetcher(query) as ResponseData;

  return (
    <Suspense fallback={<div>fetching character info...</div>}>
      <div>
        <h4 className="text-4xl">{character.name}</h4>
        {character.image && <Image
          src={character.image}
          alt={character.name}
          width={500}
          height={500}
        />}
        <p>Gender: <span className="capitalize">{character.gender}</span></p>
        <p>Species: <span className="capitalize">{character.species}</span></p>
        <p>Status: <span className="capitalize">{character.status}</span></p>
      </div>
    </Suspense>
  )
}
