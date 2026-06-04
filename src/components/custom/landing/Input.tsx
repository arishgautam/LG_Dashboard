'use client';

import { useState, ChangeEvent, InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  variant?: string;
  contentKey?: string;
};

export const Input = ({
  className,
  variant,
  contentKey,
  ...props
}: InputProps) => {
  const [query, setQuery] = useState<string>('');
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <input
      {...props}
      value={query}
      onChange={handleQueryChange}
      onBlur={() => {
        setTimeout(() => setSearchOpen(false), 200);
      }}
      onFocus={() => {
        setSearchOpen(true);
      }}
      className={className}
    />
  );
};