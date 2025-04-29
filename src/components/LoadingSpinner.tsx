import React from 'react';
import { Pokeball } from '../icons/Pokeball';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="animate-spin">
        <Pokeball className="w-16 h-16 text-red-500" />
      </div>
      <p className="mt-4 text-lg font-medium text-gray-700">Loading Pokémon...</p>
    </div>
  );
};