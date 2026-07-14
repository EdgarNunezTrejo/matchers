import { API_URL } from "@/constants/config";
import { DeleteRequestType, GetRequestType, PostRequestType, PutRequestType } from "@/types/http";

const getRequest = async <TRes>({ params, version = 'v1', headers, path }: GetRequestType):Promise<TRes> => {
    const queryString = params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '';
    const response = await fetch(`${API_URL}/api/${version}/${path}${queryString}`,
        {
            method: 'GET',
            headers,
        });

    if (!response.ok) {
    const error = await response.text();
    throw new Error(error || `HTTP ${response.status}`);
  }

  return response.json() as Promise<TRes>;
}

const postRequest = async <TRes, TReq = unknown>({ params, version = 'v1', headers, path, body }: PostRequestType<unknown, TReq>):Promise<TRes> => {
    const queryString = params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '';
    console.log(`${API_URL}/api/${version}/${path}${queryString}`)
    const response = await fetch(`${API_URL}/api/${version}/${path}${queryString}`,
        {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
        });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(error || `HTTP ${response.status}`);
    }

    return response.json() as Promise<TRes>;
}

const putRequest = async <TRes, TReq = unknown>({ params, version = 'v1', headers, path, body }: PutRequestType<unknown, TReq>):Promise<TRes> => {
    const queryString = params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '';
    const response = await fetch(`${API_URL}/api/${version}/${path}${queryString}`,
        {
            method: 'PUT',
            headers,
            body: JSON.stringify(body),
        });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(error || `HTTP ${response.status}`);
    }

    return response.json() as Promise<TRes>;
}

const deleteRequest = async <TRes, TReq = unknown>({ params, version = 'v1', headers, path, body }: DeleteRequestType<unknown, TReq>):Promise<TRes> => {
    const queryString = params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '';
    const response = await fetch(`${API_URL}/api/${version}/${path}${queryString}`,
        {
            method: 'DELETE',
            headers,
            body: JSON.stringify(body),
        });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(error || `HTTP ${response.status}`);
    }

    return response.json() as Promise<TRes>;
}


export {
    deleteRequest, getRequest,
    postRequest,
    putRequest
};

