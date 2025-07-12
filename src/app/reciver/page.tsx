'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useSignalR, LatLon } from '@/hooks/useSignalR';

const MapView = dynamic(() => import('@/components/Mapviewer'), { ssr: false });

export default function ReceiverPage() {
  const { latest, ready, error } = useSignalR();
  const [coords, setCoords] = useState<LatLon | null>(null);
  useEffect(() => { if (latest) setCoords(latest); }, [latest]);

  return (
    <main className="mx-auto max-w-lg space-y-4 p-6">
      <h1 className="text-3xl font-bold">Receiver (User B)</h1>

      {error && <p className="rounded bg-red-50 p-2 text-sm text-red-700">SignalR error: {error}</p>}
      {!ready && <p className="italic text-gray-500">Connecting to SignalR…</p>}
      {ready && !coords && <p className="italic text-gray-500">Waiting for first location…</p>}

      {coords && (
        <>
          <MapView lat={coords.lat} lon={coords.lon} user={coords.userName} />
          <p className="text-center text-sm text-gray-600">
            {coords.lat.toFixed(5)}, {coords.lon.toFixed(5)}
            
          </p>
          <p className='mt-3 text-lg text-gray-600'>User Name:{coords.userName}</p>
        </>
      )}
    </main>
  );
}
