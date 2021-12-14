import React from 'react';

type CustomCardProps = {
  icon?: string;
  title?: string;
  subTitle?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  style?: {
    backgroundColor?: string;
    backgroundColorDark?: string;
    roundedCorners?: string;
    className?: string;
    padding?: string;
  };
};

/**
 * A custom card component that can be easily edited.
 *
 * @param icon The icon to be displayed in the card. (optional, default none)
 * @param title The title to be displayed on the top of the card. (optional, default none)
 * @param subTitle The subtitle to be displayed on the top of the card. (optional, default none)
 * @param onClick The function to be called when the card is clicked. (optional, default none)
 * @param children The children to be displayed within the card. (optional, default none)
 * @param style The style to be applied to the card. (optional, default none)
 */

function CustomCard({
  icon,
  title,
  subTitle,
  onClick,
  children,
  style,
}: CustomCardProps): JSX.Element {
  return (
    <div
      className={
        style?.className +
        ` ${style?.backgroundColor ?? "bg-cardBackground"}` +
        ` dark:${style?.backgroundColorDark ?? "bg-cardBackgroundDark"}` +
        ` ${style?.padding ?? "p-3.5"}` +
        ` ${style?.roundedCorners ?? "rounded-md"}` +
        ` ${onClick && "cursor-pointer"}` +
        " inline-block"
      }
      onClick={onClick}
    >
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-row items-center">
          {icon && <img src={icon} alt="icon" className="h-10 mr-3" />}
          {title && (
            <div className={icon ? "" : "w-1/2"}>
              <p className="text-sm font-bold leading-4 ">{title}</p>
              {subTitle && <p className="text-sm leading-4">{subTitle}</p>}
            </div>
          )}
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
