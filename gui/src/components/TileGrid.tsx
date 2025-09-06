
import type { ApiKey } from '../App';

const tiles: { key: ApiKey; label: string; desc: string }[] = [
  { key: 'arya', label: 'Arya', desc: 'AI tool for assistant' },
  { key: 'astrobit', label: 'Astrobit', desc: 'Astronomical data API' },
  { key: 'codegears', label: 'Codegears', desc: 'Coding tools backend' },
  { key: 'rides', label: 'Rihal Rides', desc: 'Ride booking and tracking' },
  { key: 'vastra', label: 'Rihal Vastra', desc: 'API for clothing store' },
];

const TileGrid = ({ onSelect }: { onSelect: (key: ApiKey) => void }) => (
  <section>
    <h2 className="text-lg font-semibold text-gray-200 mb-4">🌐 General Applications</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
      {tiles.slice(0, 3).map(({ key, label, desc }) => (
        <button
          key={key}
          onClick={() => onSelect(key)}
          className="bg-gray-800 text-gray-300 px-5 py-4 rounded-lg font-bold text-center shadow-md hover:bg-gray-700 transform hover:-translate-y-1 transition duration-300"
        >
          {label}
          <span className="block text-sm font-normal text-gray-400 mt-1">{desc}</span>
        </button>

      ))}
    </div>
    <h2 className="text-lg font-semibold text-gray-200 mb-4">🏢 Rihal Organization</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {tiles.slice(3).map(({ key, label, desc }) => (
        <button
          key={key}
          onClick={() => onSelect(key)}
          className="bg-gray-800 text-gray-300 px-5 py-4 rounded-lg font-bold text-center shadow-md hover:bg-gray-700 transform hover:-translate-y-1 transition duration-300"
        >
          {label}
          <span className="block text-sm font-normal text-gray-400 mt-1">{desc}</span>
        </button>

      ))}
    </div>
  </section>
);

export default TileGrid;
