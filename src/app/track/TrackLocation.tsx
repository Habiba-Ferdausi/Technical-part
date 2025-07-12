'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { MapPin, Satellite } from 'lucide-react';
import { useSignalR, LatLon } from '@/hooks/useSignalR';
import { USER } from '@/lib/constants';

const MapView = dynamic(() => import('@/components/Mapviewer'), { ssr: false });

export default function ReceiverPage() {
  const { latest, ready, error } = useSignalR();
  const [coords, setCoords] = useState<LatLon | null>(null);
  
useEffect(() => {
  if (latest && latest?.userName === USER) {
    setCoords(latest);
  }
}, [latest]);

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 to-blue-100 p-6">
    
      {/* glass panel */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-white/60 p-8 backdrop-blur-2xl shadow-xl"
        aria-live="polite"
        aria-busy={!ready}
      >
      
        {coords && (
          <span className="pointer-events-none absolute inset-0 rounded-3xl ring-2 ring-emerald-400/40 animate-pulse-slow" />
        )}

        {/* header */}
        <header className="mb-6 flex items-center gap-3">
          <Satellite size={32} className="text-emerald-600" />
          <h1 className="text-2xl font-semibold">Tracking Receiver (User B)</h1>
        </header>

        {/* status messages */}
        {error && (
          <p role="alert" className="mb-4 rounded bg-red-100 p-2 text-sm text-red-700">
            SignalR error: {error}
          </p>
        )}

        {!ready && (
          <Status text="Connecting to SignalR…" />
        )}

        {ready && !coords && (
          <Status text="Waiting for first location…" />
        )}

        {/* map + coords */}
        {coords && (
          <>
            <div className="mb-4 rounded-lg overflow-hidden shadow-md">
              <MapView lat={coords.lat} lon={coords.lon} user={coords.userName} />
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
              <MapPin size={16} className="text-emerald-600" />
              {coords.lat.toFixed(5)}, {coords.lon.toFixed(5)}
            </div>

            <p className="mt-2 text-center text-sm text-gray-600">
              User:&nbsp;<strong>{coords.userName}</strong>
            </p>
          </>
        )}
      </motion.section>
    </main>
  );
}

/* mini status  animated spinner */
function Status({ text }: { text: string }) {
  return (
    <p className="mb-4 flex items-center justify-center gap-2 text-sm text-gray-600">
      <span className="h-3 w-3 animate-spin rounded-full border-2 border-emerald-600 border-t-transparent" />
      {text}
    </p>
  );
}

