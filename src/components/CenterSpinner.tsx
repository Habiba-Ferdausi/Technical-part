'use client';
import { ClipLoader } from 'react-spinners';

export default function CenterSpinner() {
  return (
    <div className="flex h-40 items-center justify-center">
      <ClipLoader color="#1e7bff" size={30} />
    </div>
  );
}
