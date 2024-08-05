import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from './server';
import { config } from '@/config';


console.log('NEXT_PUBLIC_VERCEL_ENV: ', process.env.NEXT_PUBLIC_VERCEL_ENV);
console.log('NEXT_PUBLIC_VERCEL_URL: ', process.env.NEXT_PUBLIC_VERCEL_URL);
console.log('VERCEL_ENV: ', process.env.VERCEL_ENV);
console.log('VERCEL_URL: ', process.env.VERCEL_URL);
console.log('VERCEL_PROJECT_PRODUCTION_URL: ', process.env.VERCEL_PROJECT_PRODUCTION_URL);

const url = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/trpc`
  : config.trpcServerUrl;

// Server rendering client
export const trpcSsr = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: (() => {
        console.log("url: ", url);
        return url;
      })()
    }),
  ],
});

// Client rendering trpc
export const trpcClc = createTRPCReact<AppRouter>();
