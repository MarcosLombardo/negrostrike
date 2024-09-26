//Estilos y componentes
import "./MapCard.Styles.css";

// Interfaces
import { IMap } from "@/interfaces/maps.interfaces";

// Hooks
import Image from "next/image";

// -----------------

const MapCard: React.FC<IMap> = ({ image, name, logo }: IMap) => {
  return (
    <div className="relative w-[400px] flex flex-col">
      <div className="hero">
        <Image
          src={image}
          alt={name}
          width={1080}
          height={1080}
          className="card_img"
          priority
        />
        <div className="text"></div>
        <div className="logo">
          <Image src={logo} alt={name} width={450} height={450} />
        </div>
        <div className="main-text">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="name w-[350px] flex justify-center">
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default MapCard;
