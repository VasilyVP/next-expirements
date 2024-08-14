import { NextApiRequest, NextApiResponse } from "next";


type CreateContextOptions = {
    req: NextApiRequest;
    res: NextApiResponse;
}

export function createContext({ req, res }: CreateContextOptions) {
    const user = {
        email: 'vv@gmail.com',
    }

    return {
        user,
        req,
        res,
    }
}

export type Context = Awaited<ReturnType<typeof createContext>>;
