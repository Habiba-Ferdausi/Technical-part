'use client';
import { useState } from 'react';

export function useLivePosition() {
  const [err, setErr]     = useState<string | null>(null);
  const [watchId, setId]  = useState<number | null>(null);

  const start = (onPos: (lat:number, lon:number) => void) => {
    if (!navigator.geolocation) { setErr('Geolocation not supported'); return; }
    const id = navigator.geolocation.watchPosition(
      p => onPos(p.coords.latitude, p.coords.longitude),
      e => setErr(e.message),
      { enableHighAccuracy: true, maximumAge: 1000, timeout: 10000 },
    );
    setId(id);
  };

  const stop = () => { if (watchId !== null) navigator.geolocation.clearWatch(watchId); setId(null); };

  return { err, watching: watchId !== null, start, stop };
}
