import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { trpc } from '../init';


const authMiddleware = trpc.middleware(async ({ ctx, next }) => {
    if (!ctx.user) throw new TRPCError({ code: 'UNAUTHORIZED' });

    return next({
        ctx: {
            user: ctx.user,
        }
    })
});

export const authProcedure = trpc.procedure.use(authMiddleware);

export const authRoutes = trpc.router({
    me: authProcedure
        .output(z.object({
            email: z.string().email().max(20),
        }))
        .query(async ({ ctx: { user } }) => {

            return user;
        }),
});
