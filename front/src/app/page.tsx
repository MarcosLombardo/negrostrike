// Estilos y componentes
import Carousel from "@/components/Carousel/Carousel";
import Hero from "@/components/Hero/Hero";
import LastGame from "@/components/LastGame/LastGame";
import Podium from "@/components/Podium/Podium";
import ContainerMain from "@/components/ui/Container";
import { characters } from "@/utils/data";

// --------------------

export default function Home() {
  return (
    <ContainerMain>
      <Hero />
      <Podium characters={characters} />
      <LastGame />
      <Carousel />
    </ContainerMain>
  );
}
