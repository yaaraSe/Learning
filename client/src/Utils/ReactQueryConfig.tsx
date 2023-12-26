// import { IMutation } from '@CommonInterfaces';
// import { ToastError } from '@CommonComponents/Toastify/Toasts';
import { QueryClient, QueryClientConfig, QueryFunction, QueryKey } from 'react-query';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { IMutation } from '../Common/CommonInterfaces';
// import { ENVIRONMENT_DOSE_NOT_EXIST_IN_TRAINING, MINUTE } from '@CommonConstants';
// import { IS_ENV_DEVELOPMENT, VITE_API_URL } from '@Utils/Environment';

export const axiosClient = axios.create({
  // baseURL: `${VITE_API_URL}/api/`,
  withCredentials: true,
});

const defaultQueryFn: QueryFunction<unknown, QueryKey> = async ({ queryKey: path }) => {
  const { data } = await axiosClient.get<unknown>(`${path}`);

  return data;
};

const defaultMutationFn = async (variables: unknown) => {
  const { method, path, data, headers } = variables as IMutation<unknown>;

  const requestHeaders: AxiosRequestConfig['headers'] = {
    Accept: 'application/json',
    ...headers,
  };
   if(requestHeaders)
  if (!(data instanceof FormData)) requestHeaders['content-type'] = 'application/json';

  const { data: updatedData } = await axiosClient({
    url: `${path}`,
    method,
    data,
    headers: requestHeaders,
  });

  return updatedData;
};

async function queryErrorHandler(error: Error | AxiosError | unknown) {
  let errorMsg;
  if (error instanceof AxiosError) {
    errorMsg = error.response?.data?.message || error.response?.data || error.message;
  } else if (error instanceof Error) errorMsg = error.message || 'שגיאה בהתחברות לשרת';

  if (errorMsg === 'Network Error' || errorMsg === 'Request failed with status code 404')
    errorMsg = 'שגיאה בהתחברות לשרת';

  // if (errorMsg !== ENVIRONMENT_DOSE_NOT_EXIST_IN_TRAINING) ToastError(errorMsg);
  // eslint-disable-next-line no-console
  // if (IS_ENV_DEVELOPMENT) console.error(errorMsg);
}
export const MINUTE = 60 * 1000;
export const createQueryClient = (options?: QueryClientConfig) => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: defaultQueryFn,
        onError: queryErrorHandler,
        refetchOnReconnect: false, // on reconnect internet, default is True
        refetchOnWindowFocus: false,
        // refetchOnMount: false, // If set to true, the query will refetch on mount if the data is stale.
        // refetchInterval: false, // refetch again after every millisecond
        staleTime: 2 * MINUTE, // 2 minutes default
        cacheTime: 24 * 60 * MINUTE, // = 1 day. 5 minutes default
        retry: false, // default is 3 times
      },
      mutations: {
        mutationFn: defaultMutationFn,
        onError: queryErrorHandler,
      },
    },
    ...options,
  });
};
