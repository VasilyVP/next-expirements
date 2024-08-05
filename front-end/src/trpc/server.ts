import { router } from './init';
import { routes } from './routes';

export const appRouter = router(routes);

export type AppRouter = typeof appRouter;
