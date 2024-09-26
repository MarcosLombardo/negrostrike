// Estilos y componentes
import "./MapsCards.Styles.css";
import MapCard from "../MapCard/MapCard";

// Interfaces
import { IMap } from "@/interfaces/maps.interfaces";

// Hooks
import Link from "next/link";

// ---------------

const MapsCards = ({ maps }: { maps: IMap[] }) => {
  return (
    <div className="cards_container">
      {maps?.map((map) => {
        return (
          <Link href={`/maps/${map.id}`} key={map.id}>
            <MapCard key={map.id} {...map} />
          </Link>
        );
      })}
    </div>
  );
};

export default MapsCards;
