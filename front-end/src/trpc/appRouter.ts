import routes from './routes/routes';
import { trpc } from './init';

export const appRouter = trpc.router(routes);

export type AppRouter = typeof appRouter;
