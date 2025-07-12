'use client';

import { useState } from 'react';

type Props = {
  onSubmit: (lat: number, lon: number) => void;
};

export default function LocationForm({ onSubmit }: Props) {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(Number(lat), Number(lon));
      }}
      className="space-y-3 rounded-xl border p-4 shadow"
    >
      <h2 className="text-lg font-semibold">Simulate coordinates</h2>
      <div className="flex gap-2">
        <input
          placeholder="Latitude"
          className="flex-1 rounded border p-2"
          value={lat}
          onChange={e => setLat(e.target.value)}
        />
        <input
          placeholder="Longitude"
          className="flex-1 rounded border p-2"
          value={lon}
          onChange={e => setLon(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:opacity-90"
      >
        Broadcast
      </button>
    </form>
  );
}
