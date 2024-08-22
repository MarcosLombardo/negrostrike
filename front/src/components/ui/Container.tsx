interface Props {
  children: React.ReactNode;
}

const ContainerMain = (props: Props) => {
  const { children } = props;

  return (
    <main className="pt-[56px] md:pt-[64px] max-w-screen-2xl m-auto">
      {children}
    </main>
  );
};

export default ContainerMain;
