import type {
  ButtonHTMLAttributes,
  ReactNode,
  AnchorHTMLAttributes,
} from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  as = "button",
  className,
  disabled,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const classes = clsx(
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    {
      "btn--loading": loading,
      "btn--full": fullWidth,
    },
    className
  );

  const content = (
    <>
      {loading && <span className="btn__spinner" />}
      {!loading && iconLeft && <span className="btn__icon">{iconLeft}</span>}
      <span className="btn__text">{children}</span>
      {!loading && iconRight && <span className="btn__icon">{iconRight}</span>}
    </>
  );

  if (as === "a") {
    return (
      <a
        className={classes}
        aria-disabled={isDisabled}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      disabled={isDisabled}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}

export default Button;