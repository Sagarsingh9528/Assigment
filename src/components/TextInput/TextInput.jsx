import React from 'react';

export const TextInput = ({ label, error, ...props }) => {
  return (
    <div className="space-y-1">
      {label && <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>}<br></br>
      <input
        {...props}
        className={`w-full rounded-md border px-3 py-2 text-sm 
          ${error ? 'border-red-500' : 'border-gray-300'} 
          focus:outline-none focus:ring-2 focus:ring-brand dark:bg-gray-800 dark:text-white`}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};
