export type GetRequestType<T=unknown> = {
    params?: T,
    version?: 'v1' | 'v2',
    headers?: Record<string, string>,
    path: string,
}
export type PostRequestType<T=unknown, TReq=unknown> = {
    params?: T,
    version?: 'v1' | 'v2',
    headers?: Record<string, string>,
    body?: TReq,
    path: string,
}
export type PutRequestType<T=unknown, TReq=unknown> = {
    params?: T,
    version?: 'v1' | 'v2',
    headers?: Record<string, string>,
    body?: TReq,
    path: string,
}
export type DeleteRequestType<T=unknown, TReq=unknown> = {
    params?: T,
    version?: 'v1' | 'v2',
    headers?: Record<string, string>,
    body?: TReq,
    path: string,
}