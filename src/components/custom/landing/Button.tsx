import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  variant?: string;
  contentKey?: string;
};

export const Button = ({
  className,
  children,
  variant,
  contentKey,
  ...props
}: ButtonProps) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};