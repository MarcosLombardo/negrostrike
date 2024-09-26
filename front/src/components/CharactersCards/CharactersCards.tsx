// Estilos y componentes
import "./CharactersCards.Styles.css";
import CharacterCard from "../CharacterCard/CharacterCard";

// Interfaces
import { ICharacter } from "@/interfaces/characters.interface";

// Hooks
import Link from "next/link";

// ------------------

const CharactersCards = ({ characters }: { characters: ICharacter[] }) => {
  return (
    <div className="cards_container">
      {characters?.map((character) => {
        return (
          <Link href={`/characters/${character.id}`} key={character.id}>
            <CharacterCard key={character.id} {...character} />
          </Link>
        );
      })}
    </div>
  );
};

export default CharactersCards;
