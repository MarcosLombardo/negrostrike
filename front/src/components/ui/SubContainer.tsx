interface Props {
  children: React.ReactNode;
}

const ContainerDiv = (props: Props) => {
  const { children } = props;

  return <div className="m-4 flex justify-center">{children}</div>;
};

export default ContainerDiv;
