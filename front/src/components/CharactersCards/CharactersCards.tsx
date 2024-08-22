import { ICharacter } from "@/interfaces/characters.interface";
import CharacterCard from "../CharacterCard/CharacterCard";
import Link from "next/link";

const CharactersCards = ({ characters }: { characters: ICharacter[] }) => {
  return (
    <div className="flex flex-wrap justify-center m-4 gap-4">
      {characters?.map((character) => {
        return (
          <Link href={"#"} key={character.id}>
            <CharacterCard key={character.id} {...character} />
          </Link>
        );
      })}
    </div>
  );
};

export default CharactersCards;
