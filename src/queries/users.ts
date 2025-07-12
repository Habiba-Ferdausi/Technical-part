import axios from 'axios';
import { Page } from '@/types/Types';
import { useInfiniteQuery } from '@tanstack/react-query';


const api = axios.create({
  baseURL: process.env. NEXT_PUBLIC_USERS_URL,
  timeout: 10_000,
});


export async function fetchUsers({
  pageParam = 0,
}: {
  pageParam?: number;
}): Promise<Page> {
  const { data } = await api.get<Page>('GetUsersList', {
    params: { take: 10, skip: pageParam },
  });
  return data;
}

//  query hook
export function useUsersInfinite() {
  return useInfiniteQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    initialPageParam: 0,
    getNextPageParam: lastPage => {
      const next = lastPage.skip + lastPage.limit;
      return next >= lastPage.total ? undefined : next;
    },
    staleTime: 60_000,
  });
}
