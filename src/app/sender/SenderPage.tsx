'use client';

import { useEffect, useState } from 'react';
import { useSignalR } from '@/hooks/useSignalR';
import { useLivePosition } from '@/hooks/useLivePosition';
import ManualForm from '@/components/ManualForm';
import { USER } from '@/lib/constants';


export default function SenderPage() {
  const { send, ready }                 = useSignalR();
  const { err, watching, start, stop }  = useLivePosition();
  const [coords, setCoords]             = useState<{ lat: number; lon: number } | null>(null);
  const [autoStart, setAutoStart]       = useState(true);

  
  useEffect(() => {
    if (autoStart && ready && !watching) start(broadcast);
  }, [autoStart, ready, watching, start]);

  function broadcast(lat: number, lon: number) {
    setCoords({ lat, lon });
    send({ lat, lon, userName: USER});
  }

  return (
    <main className="mx-auto max-w-lg space-y-6 p-6">
      <h1 className="text-3xl font-bold">Sender (User A)</h1>

      <section className="rounded border p-4">
        <h2 className="mb-2 text-lg font-semibold">Live GPS sharing</h2>
        {err && <p className="text-sm text-red-600">{err}</p>}

        <button
          onClick={
            watching
              ? () => { stop(); setCoords(null); setAutoStart(false); } 
              : () => { setAutoStart(true); start(broadcast); } 
          }
          className="rounded px-4 py-2 bg-blue-500 font-semibold text-white"
          
        >
          {watching ? 'Stop Sharing' : 'Start Sharing'}
        </button>

        {coords && (
          <p className="mt-2 text-sm text-gray-600">
            Current: {coords.lat.toFixed(5)}, {coords.lon.toFixed(5)}
          </p>
        )}
      </section>

      <ManualForm onSend={broadcast} />
    </main>
  );
}


