import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import TileGrid from './components/TileGrid';
import DetailsView from './components/DetailsView';

export type ApiKey = 'arya' | 'astrobit' | 'codegears' | 'rides' | 'vastra';

const apiData = {
  arya: {
    title: 'Arya',
    endpoint: '/api/arya',
    description: 'AI-powered assistant module.',
    sample: `GET /api/arya\nHeaders:\n  Authorization: Bearer YOUR_API_KEY\n\nResponse:\n{\n  "status": "success",\n  "data": {\n    "message": "Welcome to Arya API"\n  }\n}`,
  },
  astrobit: {
    title: 'Astrobit',
    endpoint: '/api/astrobit',
    description: 'Provides astronomical data and analytics.',
    sample: `GET /api/astrobit?date=2025-09-06\nResponse:\n{\n  "status": "success",\n  "data": {\n    "sunrise": "06:12",\n    "sunset": "18:45"\n  }\n}`,
  },
  codegears: {
    title: 'Codegears',
    endpoint: '/api/codegears',
    description: 'Backend services for coding tools.',
    sample: `POST /api/codegears\nBody:\n{\n  "project": "AI Assistant",\n  "language": "JavaScript"\n}\nResponse:\n{\n  "status": "created",\n  "id": "cg_12345"\n}`,
  },
  rides: {
    title: 'Rihal Rides',
    endpoint: '/api/rihal/rides',
    description: 'Ride booking and tracking services.',
    sample: `POST /api/rihal/rides/book\nBody:\n{\n  "userId": "u789",\n  "pickup": "Mumbai",\n  "drop": "Pune"\n}\nResponse:\n{\n  "rideId": "ride_456",\n  "status": "confirmed"\n}`,
  },
  vastra: {
    title: 'Rihal Vastra',
    endpoint: '/api/rihal/vastra',
    description: 'Inventory and fashion orders API.',
    sample: `GET /api/rihal/vastra/items\nResponse:\n{\n  "items": [\n    { "id": "v001", "name": "Kurta", "stock": 12 },\n    { "id": "v002", "name": "Saree", "stock": 5 }\n  ]\n}`,
  },
};

function App() {
  const [selectedApp, setSelectedApp] = useState<ApiKey | null>(null);

  return (
    <div className="bg-gray-900 text-gray-100 font-sans flex flex-col h-screen overflow-hidden">
      <Header />
      <main className="flex-1 overflow-y-auto pt-24 pb-24 px-2 sm:px-20 scrollbar-hide">
        {!selectedApp ? (
          <TileGrid onSelect={setSelectedApp} />
        ) : (
          <DetailsView data={apiData[selectedApp]} onBack={() => setSelectedApp(null)} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
