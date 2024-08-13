import { randomUUID } from 'crypto';
import { z } from 'zod';
import { Users } from '../data';
import { trpc } from '../init';


const procedure = trpc.procedure;

export const publicRoutes = {
    userList: procedure
        .query(async () => {
            return Users;
        }),
    userById: procedure
        .input(z.string())
        .query(async (opts) => {
            const { input } = opts;

            const user = Users.find(user => user.id === input);

            return user;
        }),
    userCreate: procedure
        .input(z.object({ email: z.coerce.string().email() }))
        .mutation(async (opts) => {
            const { email } = opts.input;

            const user = {
                id: randomUUID(),
                email,
            };

            Users.push(user);

            return user;
        }),
}
