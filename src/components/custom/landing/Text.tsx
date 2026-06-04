import { HTMLAttributes, ReactNode } from "react";

type TextProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  className?: string;
  variant?: string;
  contentKey?: string;
};

export const Text = ({
  className,
  children,
  variant,
  contentKey,
  ...props
}: TextProps) => {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
};