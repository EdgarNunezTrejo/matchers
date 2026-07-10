// src/hooks/use-http.ts
import { deleteRequest, getRequest, postRequest, putRequest } from '@/lib/http';
import { useAuthStore } from '@/stores/auth.store';
import { DeleteRequestType, GetRequestType, PostRequestType, PutRequestType } from '@/types/http';

export function useHttp() {
  const token = useAuthStore(state => state.token);

  const authHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
  };

  return {
    get: <TRes>(params: GetRequestType) =>
      getRequest<TRes>({
        ...params,
        headers: { ...authHeaders, ...params.headers },
      }),

    post: <TRes, TReq = unknown>(params: PostRequestType<unknown, TReq>) =>
      postRequest<TRes, TReq>({
        ...params,
        headers: { ...authHeaders, ...params.headers },
      }),

    put: <TRes, TReq = unknown>(params: PutRequestType<unknown, TReq>) =>
      putRequest<TRes, TReq>({
        ...params,
        headers: { ...authHeaders, ...params.headers },
      }),

    delete: <TRes, TReq = unknown>(params: DeleteRequestType<unknown, TReq>) =>
      deleteRequest<TRes, TReq>({
        ...params,
        headers: { ...authHeaders, ...params.headers },
      }),
  };
}