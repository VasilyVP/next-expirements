import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from './appRouter';
//import { createTRPCNext } from '@trpc/next';
import { config } from '@/config';


const url = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}/api/trpc`
  : config.trpcServerLocal;

if (!url) throw Error('tRPC URL is not defined');

// for server components
export const trpcSsr = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({ url }),
  ],
});

// for client components
export const trpcClc = createTRPCReact<AppRouter>();

// unified version if no conflict with tanstack
/* const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      url: '/api/trpc',
    };
  },
  ssr: true,
});
 */
