import React from 'react';
import FiverrCard from './FiverrCard';
import { cards } from '@/data/cards';

const GigGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <FiverrCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default GigGrid;
