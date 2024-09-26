//Estilos y componentes
import "./CharacterCard.Styles.css";

// Interfaces
import { ICharacter } from "@/interfaces/characters.interface";

// Hooks
import Image from "next/image";

// -----------------

const CharacterCard: React.FC<ICharacter> = ({
  image,
  name,
  position,
  avatar,
}: ICharacter) => {
  return (
    <div className="card">
      <Image
        src={image}
        alt={name}
        width={1080}
        height={1080}
        className="card_img"
        priority
      />
      <div className="card_overlay">
        <div className="card_header">
          <svg className="card_arc" xmlns="http://www.w3.org/2000/svg">
            <path d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" />
          </svg>
          <Image
            src={avatar}
            alt={name}
            width={1080}
            height={1080}
            className="card_thumb"
          />
          <div className="card_header-text">
            <h3 className="card_title">{name}</h3>
            <span className="card_status">Rank: {position}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
