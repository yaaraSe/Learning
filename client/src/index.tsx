// import './index.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import ToastsContainer from '@CommonComponents/Toastify/ToastsContainer';
import { QueryClientProvider } from 'react-query';
// import { RecoilRoot } from 'recoil';
// import { ErrorBoundary } from 'react-error-boundary';
// import ErrorFallback from '@CommonComponents/ErrorFallback/ErrorFallback';
// import Loading from '@CommonComponents/Loading/Loading';
// import { createQueryClient } from '@Utils/ReactQueryConfig';
// import ReactQueryDevtoolsDevelopment from '@CommonComponents/ReactQueryDevtoolsDevelopment/ReactQueryDevtoolsDevelopment';
import App from './App';
import { createQueryClient } from './Utils/ReactQueryConfig';

const queryClient = createQueryClient();

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      {/* <ErrorBoundary FallbackComponent={ErrorFallback}> */}
        {/* <RecoilRoot> */}
          <QueryClientProvider client={queryClient}>
            <App />
            {/* <Loading /> */}
            {/* <ToastsContainer /> */}
            {/* <ReactQueryDevtoolsDevelopment /> */}
          </QueryClientProvider>
        {/* </RecoilRoot> */}
      {/* </ErrorBoundary> */}
    </BrowserRouter>
  </StrictMode>
);
