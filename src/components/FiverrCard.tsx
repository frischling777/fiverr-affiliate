type FiverrCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  affiliateUrl: string;
  tags?: string[];
  rating?: number;
};

export default function FiverrCard({
  title,
  description,
  imageUrl,
  affiliateUrl,
  tags,
  rating,
}: FiverrCardProps) {
  return (
    <div className="max-w-sm rounded-lg shadow-md bg-white p-4 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-50 transition-transform duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="mt-4 text-xl font-semibold text-gray-800">{title}</h2>
      <p className="mt-2 text-gray-600 text-sm">{description}</p>
      {tags && (
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <a
        href={affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Jetzt entdecken
      </a>
    </div>
  );
}
