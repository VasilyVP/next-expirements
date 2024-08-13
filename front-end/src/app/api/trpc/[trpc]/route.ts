import { appRouter } from "@/trpc/appRouter";
import { createContext } from "@/trpc/context";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { NextApiRequest, NextApiResponse } from "@trpc/server/adapters/next";


const handler = (request: Request) => {
    const req = request as unknown as NextApiRequest;
    const res = {} as NextApiResponse;

    return fetchRequestHandler({
        endpoint: "/api/trpc",
        req: request,
        router: appRouter,
        createContext: () => createContext({ req, res }),
    });
}

export { handler as GET, handler as POST };
