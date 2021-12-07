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

/**
 * A custom card component that can be easly edited.
 *
 * @param title The title to be displayed on the top of the card. (optional, default none)
 * @param subTitle The subtitle to be displayed on the top of the card. (optional, default none)
 * @param backgroundColor The background color of the card. (optional, default 'bg-cardBackground')
 * @param backgroundColorDark The background color of the card in dark mode. (optional, default 'bg-cardBackgroundDark')
 * @param roundedCorners The rounded corners of the card. (optional, default 'rounded-md')
 * @param className The className of the card. (optional)
 * @param onClick The function to be called when the card is clicked. (optional, default none)
 * @param padding The padding of the card. (optional, default 'p-3.5')
 * @param children The children to be displayed within the card. (optional, default none)
 */

function CustomCard(props: CustomCardProps): JSX.Element {
  const { title, subTitle, onClick, children } = props;

  return (
    <div
      className={
        props.className +
        ` ${props.backgroundColor ?? "bg-cardBackground"}` +
        ` dark:${props.backgroundColorDark ?? "bg-cardBackgroundDark"}` +
        ` ${props.padding ?? "p-3.5"}` +
        ` ${props.roundedCorners ?? "rounded-md"}` +
        ` ${onClick && "cursor-pointer"}` +
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
