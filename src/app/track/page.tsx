import React from 'react'
import { Metadata } from 'next';
import TrackingLocation from './TrackLocation';

export const metadata: Metadata = {
    title: "Tracking Location | Technical Test",

  };
export default function page() {
  return (
    <div>
     <TrackingLocation/>
    </div>
  )
}
