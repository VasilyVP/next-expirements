import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from './server';
import { config } from '@/config';


const url = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}/api/trpc`
  : config.trpcServerLocal;

if (!url) throw Error('tRPC URL is not defined');

// Server rendering client
export const trpcSsr = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({ url }),
  ],
});

// Client rendering trpc
export const trpcClc = createTRPCReact<AppRouter>();
