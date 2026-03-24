import type { ReactNode } from "react";
import clsx from "clsx";

type MainLayoutVariant = "default" | "soft" | "immersive";

type MainLayoutProps = {
  children: ReactNode;
  variant?: MainLayoutVariant;
  className?: string;
};

function MainLayout({
  children,
  variant = "default",
  className,
}: MainLayoutProps) {
  return (
    <div
      className={clsx(
        "app-shell",
        `app-shell--${variant}`,
        className
      )}
    >
      {children}
    </div>
  );
}

export default MainLayout;