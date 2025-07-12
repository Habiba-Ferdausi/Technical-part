'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import {
  LocateIcon,
  LocateFixedIcon,
  UsersRound as UsersIcon,
} from 'lucide-react';

export default function Home() {

  const cardVariants:Variants = {
    hidden: (i: number) => ({ opacity: 0, y: 25 }),
    show:   (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.08 * i, type: 'spring', stiffness: 350 },
    }),
    hover: { y: -6 },
  } as const;

  /* card data */
  const cards = [
    {
      href: '/sender',
      grad: 'from-blue-500 to-blue-600',
      title: 'Share my location',
      Icon: LocateIcon,
      desc: "Broadcast this device’s GPS",
    },
    {
      href: '/receiver',
      grad: 'from-emerald-500 to-emerald-600',
      title: 'Track location',
      Icon: LocateFixedIcon,
      desc: 'Watch live pins move',
    },
    {
      href: '/users',
      grad: 'from-violet-500 to-fuchsia-600',
      title: 'Browse users',
      Icon: UsersIcon,
      desc: 'Infinite-scroll profile list',
      highlight: true,
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 to-blue-100">
    
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-16 p-6">
        {/* headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="mb-5 text-5xl font-extrabold leading-tight text-gray-900 sm:text-6xl">
            Real-Time{' '}
            <span className="bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
              Location&nbsp;Sharing
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Share, track, and explore — all in one  playground.
          </p>
        </motion.div>

        {/* cards */}
        <div className="grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.href}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              whileHover="hover"
              className="motion-safe:transition-transform motion-safe:duration-300"
            >
              <Link
                href={c.href}
                aria-label={c.title}
                className="relative flex flex-col items-center gap-4 overflow-hidden rounded-3xl p-8 text-white shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
              >
            
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${c.grad} opacity-90 backdrop-blur-md`}
                />

             
                {c.highlight && (
                  <div className="pointer-events-none absolute inset-0 animate-pulse-slow rounded-3xl ring-2 ring-white/30" />
                )}

             
                <c.Icon aria-hidden size={46} className="relative z-10 drop-shadow-md" />
                <div className="relative z-10 text-center">
                  <h3 className="mb-1 text-xl font-semibold">{c.title}</h3>
                  <p className="text-sm/relaxed">{c.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

