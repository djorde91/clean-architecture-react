type BoxFrameProps = {
  children: React.ReactNode;
  title: string;
};

function BoxFrame(props: BoxFrameProps) {
  const { children, title } = props;

  return (
    <div className="border-y-2 sm:border-2 sm:rounded-xl p-4">
      <h2 className="py-2 font-bold text-xl">{title}</h2>
      {children}
    </div>
  );
}

export default BoxFrame;
