import LogoBar from '@/components/LogoBar';
import GigGrid from '@/components/GigGrid';
import { Suspense } from 'react';

import { cards } from '@/data/cards';

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <LogoBar />
      <Suspense
        fallback={
          <p className="text-center text-gray-500">Lade Fiverr-Gigs...</p>
        }
      >
        <GigGrid cards={cards} />
      </Suspense>
    </main>
  );
}
