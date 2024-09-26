"use client";

// Estilos y componentes
import ContainerMain from "@/components/ui/Container";

// Interfaces
import { ICharacter } from "@/interfaces/characters.interface";

// Endpoints
import { characters } from "@/utils/data";

// Hooks
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

// --------------------

export default function CharactersId() {
  const params = useParams();
  const id = params.id;

  const [character, setCharacter] = useState<ICharacter | null>(null);

  useEffect(() => {
    if (id) {
      const foundCharacter = characters.find((char) => char.id === id);
      setCharacter(foundCharacter || null);
    }
  }, [id]);

  return (
    <ContainerMain>
      <h1>Detalles del Personaje</h1>
      {character ? (
        <div>
          <h2>{character.name}</h2>
          <p>Position: {character.position}</p>
          <Image
            src={character.image}
            alt={character.name}
            width={1080}
            height={1080}
            priority
          />
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </ContainerMain>
  );
}
