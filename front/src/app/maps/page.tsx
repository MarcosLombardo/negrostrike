// Estilos y componentes
import MapsCards from "@/components/MapsCards/MapsCards";
import ContainerMain from "@/components/ui/Container";

// Endpoints
import { maps } from "@/utils/data";

// ---------------------

export default function Maps() {
  return (
    <ContainerMain>
      <MapsCards maps={maps} />
    </ContainerMain>
  );
}
