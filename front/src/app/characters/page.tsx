//Estilos y componentes
import CharactersCards from "@/components/CharactersCards/CharactersCards";
import ContainerMain from "@/components/ui/Container";
import { characters } from "@/utils/data";

// -----------------

export default function Characters() {
  return (
    <ContainerMain>
      <CharactersCards characters={characters} />
    </ContainerMain>
  );
}
