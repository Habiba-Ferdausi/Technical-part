'use client';

import {
  HubConnectionBuilder,
  HubConnectionState,
  HttpTransportType,
  LogLevel,
} from '@microsoft/signalr';
import { useCallback, useEffect, useState } from 'react';
import { HUB_URL } from '@/lib/constants';

export type LatLon = { userName: string; lat: number; lon: number };

export function useSignalR() {
  const [latest, setLatest] = useState<LatLon | null>(null);
  const [ready,  setReady]  = useState(false);
  const [error,  setError]  = useState<string | null>(null);

 
  const [conn] = useState(() =>
    new HubConnectionBuilder()
      .withUrl(HUB_URL, { withCredentials: false, transport: HttpTransportType.WebSockets })
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Warning)
      .build(),
  );

  useEffect(() => {
    conn
      .start()
      .then(() => setReady(true))
      .catch(err => setError(err.message));

    return () => void conn.stop();
  }, [conn]);

 
  useEffect(() => {
    const h = (p: LatLon) => setLatest(p);
    conn.on('ReceiveLatLon', h);
    return () => { conn.off('ReceiveLatLon', h); };
  }, [conn]);

  
  const send = useCallback(
    async (p: LatLon) => {
      if (conn.state === HubConnectionState.Connected) {
        await conn.invoke('SendLatLon', p.lat, p.lon, p.userName);
      }
    },
    [conn],
  );

  return { latest, ready, error, send };
}
