import React from 'react'
import UsersList from './UsersList'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Users | Technical Test",

  };
export default function page() {
  return (
    <div>
        <UsersList/>
    </div>
  )
}
