"use client";

// Interface
import { ICharacter } from "@/interfaces/characters.interface";

// Hooks
import { useEffect, useState } from "react";
import Image from "next/image";

// --------------

const Podium = ({ characters }: { characters: ICharacter[] }) => {
  const [podiumCharacters, setPodiumCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    if (characters && characters.length > 0) {
      const sortedCharacters = characters
        .sort((a, b) => a.position - b.position)
        .slice(0, 3);
      setPodiumCharacters(sortedCharacters);
    }
  }, [characters]);

  return (
    <section className="w-[40%] ml-6 -mt-32 p-4 relative z-10 flex items-end gap-4 bg-black sm:ml-8 md:-mt-64 lg:ml-12">
      <div className="h-24 md:h-44 w-1/3 flex flex-col justify-end items-center">
        <Image
          src={podiumCharacters[1]?.avatar}
          alt={podiumCharacters[1]?.name}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
        <p className="text-white">
          {podiumCharacters[1]?.position}-{podiumCharacters[1]?.name}
        </p>
      </div>
      <div className="h-32 md:h-64 w-1/3 flex flex-col justify-end items-center">
        <Image
          src={podiumCharacters[0]?.avatar}
          alt={podiumCharacters[0]?.name}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
        <p className="text-white">
          {podiumCharacters[0]?.position}-{podiumCharacters[0]?.name}
        </p>
      </div>{" "}
      <div className="h-16 md:h-32 w-1/3 flex flex-col justify-end items-center">
        <Image
          src={podiumCharacters[2]?.avatar}
          alt={podiumCharacters[2]?.name}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
        <p className="text-white">
          {podiumCharacters[2]?.position}-{podiumCharacters[2]?.name}
        </p>
      </div>
    </section>
  );
};

export default Podium;
