import type { ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";

type Variant = "default" | "outlined" | "elevated" | "glass";
type Padding = "sm" | "md" | "lg";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: Variant;
  padding?: Padding;
  hoverable?: boolean;
  clickable?: boolean;
};

function Card({
  children,
  variant = "default",
  padding = "md",
  hoverable = false,
  clickable = false,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        "card",
        `card--${variant}`,
        `card--pad-${padding}`,
        {
          "card--hover": hoverable,
          "card--clickable": clickable,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;