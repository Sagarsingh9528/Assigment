import React from 'react';
import clsx from 'clsx';

const variants = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-semibold',
  h3: 'text-2xl font-medium',
  h4: 'text-xl font-medium',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium',
};

export const Heading = ({ children, as = 'h2', variant = 'h2', className = '' }) => {
  const Tag = as;
  return (
    <Tag className={clsx(variants[variant], 'text-gray-900 dark:text-white', className)}>
      {children}
    </Tag>
  );
};
