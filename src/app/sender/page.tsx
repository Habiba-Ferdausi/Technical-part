import React from 'react'
import { Metadata } from 'next';
import SenderPage from './SenderPage';

export const metadata: Metadata = {
    title: "Send Location | Technical Test",

  };
export default function page() {
  return (
    <div>
     <SenderPage/>
    </div>
  )
}
