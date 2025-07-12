'use client';

import { useUsersInfinite } from '@/queries/users';
import UserCard from '@/components/UserCard';
import { useInfiniteScroll } from '@/components/useInfiniteScroll';
import { ClipLoader } from 'react-spinners';

export default function Users() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,      
    status,
    error,
  } = useUsersInfinite();

  const bottomRef = useInfiniteScroll(() => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage();
  });

  return (
    <main className="mx-auto max-w-6xl space-y-6 p-6">
      <h1 className="mb-6 text-center text-3xl font-bold">Users</h1>

      {/* loaders */}
      {isLoading && (                        
        <div className="flex justify-center py-20">
          <ClipLoader color="#1e7bff" size={48} />
        </div>
      )}

      {status === 'error' && (
        <p className="rounded bg-red-50 p-4 text-center text-red-700">
          {(error as Error).message}
        </p>
      )}

      
      {data && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          {data.pages.flatMap(p => p.users).map(u => (
            <UserCard key={u.id} u={u} />
          ))}
        </div>
      )}

       {/* infinite-scroll   */}
       
      <div ref={bottomRef} className="py-8 text-center">
        {isFetchingNextPage ? (
          <ClipLoader color="#1e7bff" size={30} />
        ) : (
          !hasNextPage && 'No more users'
        )}
      </div>
    </main>
  );
}
