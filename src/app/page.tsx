
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 p-6">
  
      <header className="text-center">
        <h1 className="mb-4 text-4xl font-extrabold">
          Real-Time Location Demo
        </h1>
        <p className="max-w-xl text-lg text-gray-600">
          Click <strong>Share my location</strong> on any device&nbsp;📱 to broadcast
          your GPS. Open <strong>Track location</strong> in another tab (or device) to
          see pins move live via SignalR + Leaflet.
        </p>
      </header>

      
      <div className="grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        <CTA
          href="/sender"
          bg="bg-blue-600"
          title="Share my location"
          emoji="📤"
          desc="Broadcast this device’s GPS"
        />
        <CTA
          href="/receiver"
          bg="bg-green-600"
          title="Track location"
          emoji="📍"
          desc="Watch live pins from anyone sharing"
        />
      </div>
    </main>
  );
}

function CTA({
  href,
  bg,
  title,
  emoji,
  desc,
}: {
  href: string;
  bg: string;
  title: string;
  emoji: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className={`${bg} group flex flex-col items-center justify-center gap-3 rounded-xl p-8 text-white transition hover:scale-[1.02] hover:shadow-lg`}
    >
      <span className="text-5xl">{emoji}</span>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-center text-sm opacity-90">{desc}</p>
    </Link>
  );
}
