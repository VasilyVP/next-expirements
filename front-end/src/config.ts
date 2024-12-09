export const isServer = typeof window === "undefined";
export const isClient = typeof window !== "undefined";


if (isServer && !process.env.DRIZZLE_DATABASE_URL) {
    console.log('process.env.DRIZZLE_DATABASE_URL (inside): ', process.env.DRIZZLE_DATABASE_URL);
    throw new Error("DRIZZLE_DATABASE_URL is not defined");
}

export const config = {
    trpcServerLocal: process.env.NEXT_PUBLIC_TRPC_SERVER, // only for local dev
    drizzleDatabaseUrl: process.env.DRIZZLE_DATABASE_URL!,
}
