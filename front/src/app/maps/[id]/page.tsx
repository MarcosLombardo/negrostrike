"use client";

// Estilos y componentes
import ContainerMain from "@/components/ui/Container";

// Interfaces
import { IMap } from "@/interfaces/maps.interfaces";

// Endpoints
import { maps } from "@/utils/data";

// Hooks
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

// --------------------

export default function CharactersId() {
  const params = useParams();
  const id = params.id;

  const [map, setMap] = useState<IMap | null>(null);

  useEffect(() => {
    if (id) {
      const foundMap = maps.find((map) => map.id === id);
      setMap(foundMap || null);
    }
  }, [id]);

  return (
    <ContainerMain>
      <h1>Detalles del mapa</h1>
      {map ? (
        <div>
          <h2>{map.name}</h2>
          <p>Partidas jugadas: {map.plays}</p>
          <Image
            src={map.image}
            alt={map.name}
            width={1080}
            height={1080}
            priority
            style={{ width: "80%", height: "auto" }}
          />
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </ContainerMain>
  );
}
