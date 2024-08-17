import { trpcSsr } from "@/trpc/client";
import prisma from "prisma/client";

export default async function ServerComponent() {
    const res = await trpcSsr.userList.query();

    const users = await prisma.user.findMany();

    console.log("users: ", users);

    return 'Server component: ' + res[0].email;
}
