// Estilos y componentes
import ContainerDiv from "../ui/SubContainer";

// Hooks
import Image from "next/image";

// ------------------

const Hero = () => {
  return (
    <ContainerDiv>
      <Image src={"/Arrecifes.png"} alt={""} width={1250} height={0} />
    </ContainerDiv>
  );
};

export default Hero;
