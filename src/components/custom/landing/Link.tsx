
import {Link as CustomLink} from 'react-router-dom'
import type { AnchorHTMLAttributes, ReactNode } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: string;
};

export const Link = ({ children, href = "", className, ...props }: LinkProps) => {
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("#");

  if (isExternal) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <CustomLink to={href} className={className} {...props}>
      {children}
    </CustomLink>
  );
};