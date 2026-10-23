import type { CSSProperties, ElementType, ReactNode } from "react";

type LiquidGlassProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  tone?: "light" | "dark";
  style?: CSSProperties;
  [key: string]: unknown;
};

export default function LiquidGlass({
  as: Component = "div",
  children,
  className = "",
  interactive = false,
  tone = "light",
  style,
  ...props
}: LiquidGlassProps) {
  return (
    <Component
      className={`liquid-glass liquid-glass-${tone} ${
        interactive ? "liquid-glass-interactive" : ""
      } ${className}`}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
}
