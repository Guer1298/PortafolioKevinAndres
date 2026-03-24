import type { ReactNode } from "react";
import clsx from "clsx";

type Align = "left" | "center";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: Align;
  children?: ReactNode;
  className?: string;
};

function SectionTitle({
  title,
  subtitle,
  eyebrow,
  align = "center",
  children,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={clsx(
        "section-title-block",
        `section-title--${align}`,
        className
      )}
    >
      {eyebrow && (
        <span className="section-title__eyebrow">
          {eyebrow}
        </span>
      )}

      <h2 className="section-title__heading">
        {title}
      </h2>

      {subtitle && (
        <p className="section-title__subtitle">
          {subtitle}
        </p>
      )}

      {children && (
        <div className="section-title__extra">
          {children}
        </div>
      )}
    </div>
  );
}

export default SectionTitle;