import { trpcSsr } from "@/trpc/client";

export default async function ServerComponent() {
    const res = await trpcSsr.userList.query();

    return 'Server component: ' + res[0].email;
}
