import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from './server';
import { config } from '@/config';


// Server rendering client
export const trpcSsr = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: config.trpcServerUrl, //'http://localhost:3001',
    }),
  ],
});

// Client rendering trpc
export const trpcClc = createTRPCReact<AppRouter>();
