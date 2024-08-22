//Estilos y componentes
import { characters } from "@/utils/data";
import "./CharacterCard.Styles.css";

// Interfaces
import { ICharacter } from "@/interfaces/characters.interface";

// Hooks
import Image from "next/image";

// -----------------

const CharacterCard: React.FC<ICharacter> = ({ image, name }: ICharacter) => {
  return (
    <div className="relative w-[300px] h-[348px] flex flex-col">
      <div className="card">
        <Image
          src={image}
          alt={name}
          width={1080}
          height={1080}
          className="img"
        />
        <h3 className="name">{name}</h3>
      </div>
    </div>
  );
};

export default CharacterCard;
