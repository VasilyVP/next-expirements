import { trpcSsr } from "@/trpc/client";

export default async function ServerComponent() {
    const res = await trpcSsr.publicRoutes.userList.query();

    return 'Server component: ' + res[0].email;
}
