'use client';

import Image from 'next/image';
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  BadgeDollarSign,
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import Meta from './Meta';
import { RawUser } from '@/types/Types';

export default function UserCard({ u }: { u: RawUser }) {
  return (
    <article
      className={twMerge(
        'relative flex gap-4 overflow-hidden rounded-2xl border border-white/20',
        'bg-white/60 backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-lg',
      )}
    >
      {/* brand ribbon */}
      <span className="absolute left-0 top-0 h-full w-1 bg-primary" />


      <Image
        src={u.image}
        alt={`${u.firstName} ${u.lastName}`}
        width={72}
        height={72}
        unoptimized     
        className="m-4 h-18 w-18 shrink-0 rounded-full object-cover shadow-md"
      />

      {/* content */}
      <div className="flex flex-1 flex-col justify-center gap-2 py-4 pr-4">
   
        <header>
          <h3 className="text-lg font-semibold leading-none">
            {u.firstName} {u.lastName}
          </h3>
          <p className="text-sm text-gray-500">
            {u.company.title} — {u.company?.department}
          </p>
        </header>

   
        <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-[0.78rem] text-gray-600">
          <Meta icon={Mail}  label={u.email} />
          <Meta icon={Phone} label={u.phone} />
          <Meta
            icon={MapPin}
            label={`${u.address.city}, ${u.address.stateCode}`}
          />
          <Meta icon={Building2} label={u.university} />
          <Meta
            icon={BadgeDollarSign}
            label={Intl.NumberFormat('en', {
              style: 'currency',
              currency: u.bank.currency ?? 'USD',
              maximumFractionDigits: 0,
            }).format(Number(u.bank.cardExpire.split('/')[1]) * 1000)}
          />
        </ul>
      </div>
    </article>
  );
}


