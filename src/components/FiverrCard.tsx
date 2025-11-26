import React from 'react';
import Image from 'next/image';
import { FiverrCardProps } from '@/types';

const FiverrCard: React.FC<FiverrCardProps> = ({
  title,
  description,
  imageUrl,
  alt,
  affiliateUrl,
  tags = [],
  rating,
}) => {
  return (
    <div className="max-w-sm rounded-lg shadow-md bg-white p-4 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-50 transition-transform duration-300">
      {/* Einheitliche Bannergröße */}
      <div className="w-full flex justify-center">
        <Image
          src={imageUrl}
          alt={alt}
          width={300} // feste Breite
          height={100} // Höhe proportional anpassen
          className="w-[300px] h-auto rounded-md object-contain"
        />
      </div>

      <h3 className="text-lg font-semibold mt-3 text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-green-500 px-2 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Rating */}
      <p className="text-sm text-gray-500 mt-2">⭐ {rating}</p>

      {/* Affiliate Link */}
      <a
        href={affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
      >
        Jetzt ansehen
      </a>
    </div>
  );
};

export default FiverrCard;
