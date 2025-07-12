'use client';

import { ClipLoader } from 'react-spinners';

export function CenterSpinner({ label }: { label?: string }) {
  return (
    <div className="flex h-40 flex-col items-center justify-center gap-3">
      <ClipLoader color="#1e7bff" size={30} />
      {label && <span className="text-sm text-gray-600">{label}</span>}
    </div>
  );
}
