import type { ElementType, ReactNode } from "react";
import clsx from "clsx";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

type ContainerProps<T extends ElementType = "div"> = {
  children: ReactNode;
  as?: T;
  size?: ContainerSize;
  centered?: boolean;
  noPadding?: boolean;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

function Container<T extends ElementType = "div">({
  children,
  as,
  size = "lg",
  centered = true,
  noPadding = false,
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={clsx(
        "container",
        `container--${size}`,
        {
          "container--centered": centered,
          "container--no-padding": noPadding,
        },
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Container;