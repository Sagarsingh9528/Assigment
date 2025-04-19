import React, { useEffect } from 'react';

export const Toast = ({ message, type = 'info', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const base = 'px-4 py-2 rounded shadow text-sm text-white';
  const bg = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-blue-600',
  }[type];

  return <div className={`${base} ${bg}`}>{message}</div>;
};
