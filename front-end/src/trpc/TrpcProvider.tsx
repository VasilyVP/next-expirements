'use client'
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
//import { config } from '@/config';
import { trpcClc } from "@/trpc/client";


const trpcClient = trpcClc.createClient({
    links: [
        httpBatchLink({
            url: '/api/trpc' //`https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}/api/trpc`
            //'/api/trpc', //config.trpcServerUrl,
        }),
    ],
});

const queryClient = new QueryClient();

type TrpcProviderProps = {
    children: ReactNode | ReactNode[];
}
export default function TrpcProvider({ children }: TrpcProviderProps) {
    return (
        <trpcClc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </trpcClc.Provider>
    )
}
