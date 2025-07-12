"use client";
import { useState } from "react";

function ManualForm({ onSend }: { onSend: (lat: number, lon: number) => void }) {
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    return (
      <form
        onSubmit={e => { e.preventDefault(); onSend(Number(lat), Number(lon)); }}
        className="space-y-3 rounded border p-4"
      >
        <h2 className="text-lg font-semibold">Simulate coordinates</h2>
        <div className="flex gap-2">
          <input value={lat} onChange={e => setLat(e.target.value)} className="flex-1 rounded border p-2" placeholder="Latitude" />
          <input value={lon} onChange={e => setLon(e.target.value)} className="flex-1 rounded border p-2" placeholder="Longitude" />
        </div>
        <button  className="w-full rounded px-4 py-2 font-semibold text-white bg-purple-500 hover:opacity-90">
          Broadcast
        </button>
      </form>
    );
  }
  export default ManualForm;