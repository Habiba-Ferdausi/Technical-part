'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RadioTower, XCircle } from 'lucide-react';
import { useSignalR } from '@/hooks/useSignalR';
import { useLivePosition } from '@/hooks/useLivePosition';
import ManualForm from '@/components/ManualForm';
import { USER } from '@/lib/constants';

export default function SenderPage() {
  const { send, ready } = useSignalR();
  const { err, watching, start, stop } = useLivePosition();
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [autoStart, setAutoStart] = useState(true);

  
  useEffect(() => {
    if (autoStart && ready && !watching) start(broadcast);
  }, [autoStart, ready, watching, start]);

  function broadcast(lat: number, lon: number) {
    setCoords({ lat, lon });
    if (ready) send({ lat, lon, userName: USER });
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center ">
     
      {/*  card */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative  w-full max-w-xl overflow-hidden rounded-3xl border border-white/20 bg-white/60 p-8 backdrop-blur-2xl shadow-xl"
        aria-live="polite"
        aria-busy={!ready}
      >
     
        <header className="mb-6 flex items-center gap-3">
          <RadioTower size={32} className="text-blue-600" />
          <h1 className="text-2xl font-semibold">Sender (User A)</h1>
        </header>

        <h2 className="mb-2 text-lg font-medium text-gray-700">Live GPS sharing</h2>

        {/* error */}
        {err && (
          <p role="alert" className="mb-4 rounded bg-red-100 p-2 text-sm text-red-700">
            {err}
          </p>
        )}

        {/* action button */}
        <button
          onClick={
            watching
              ? () => {
                  stop();
                  setCoords(null);
                  setAutoStart(false);
                }
              : () => {
                  setAutoStart(true);
                  start(broadcast);
                }
          }
          className="mb-4 w-full rounded-full bg-gradient-to-r from-blue-600 to-violet-600 py-3 text-center text-lg font-semibold text-white shadow-md transition hover:brightness-110 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/50"
          aria-pressed={watching}
        >
          {watching ? 'Stop sharing' : 'Start sharing'}
        </button>

        {/* current coordinates */}
        {coords && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-3 py-1 text-sm text-blue-700">
            <span className="h-2 w-2 animate-ping rounded-full bg-blue-500" />
            {coords.lat.toFixed(5)}, {coords.lon.toFixed(5)}
          </div>
        )}

        {/* waiting spinner */}
        {ready && !coords && watching && (
          <p className="mb-4 flex items-center gap-2 text-sm text-gray-600">
            <span className="h-2 w-2 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
            Waiting for first GPS fix…
          </p>
        )}

    
        <ManualForm onSend={broadcast} />
      </motion.section>
    </main>
  );
}

