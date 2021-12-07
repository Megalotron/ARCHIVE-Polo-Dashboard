type CustomCardProps = {
  title?: string;
  subTitle?: string;
  backgroundColor?: string;
  backgroundColorDark?: string;
  roundedCorners?: string;
  className?: string;
  onClick?: () => void;
  padding?: string;
  children?: React.ReactNode;
};

function CustomCard(props: CustomCardProps): JSX.Element {
  const {
    title,
    subTitle,
    backgroundColor = "bg-cardBackground",
    backgroundColorDark = "dark:bg-cardBackgroundDark",
    roundedCorners = "rounded-md",
    padding = "p-3.5",
    className,
    onClick,
    children,
  } = props;

  return (
    <div
      className={
        className +
        ` ${backgroundColor}` +
        ` dark:${backgroundColorDark}` +
        ` ${padding}` +
        ` ${roundedCorners}` +
        " inline-block"
      }
      onClick={onClick}
    >
      <div className="flex flex-col w-full h-full">
        {title && (
          <div className="w-1/2">
            <p className="text-sm font-bold leading-4 ">{title}</p>
            {subTitle && <p className="text-sm leading-4">{subTitle}</p>}
          </div>
        )}
        <div className="flex flex-col items-center justify-center w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
