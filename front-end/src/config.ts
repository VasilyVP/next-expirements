
if (!process.env.NEXT_PUBLIC_TRPC_SERVER) throw Error('NEXT_PUBLIC_TRPC_SERVER is not defined');

export const config = {
    trpcServerUrl: process.env.NEXT_PUBLIC_TRPC_SERVER,
}
