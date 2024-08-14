'use client'
import { trpcClc } from "@/trpc/client";
import { Box } from "@mui/material";


export default function ClientComponent() {
    const { data: users /* , error */  } = trpcClc.publicRoutes.userList.useQuery(undefined, {
        refetchOnMount: false,
    });

    const { data: me, error } = trpcClc.authRoutes.me.useQuery();

    console.log("me: ", me);
    console.log("error: ", error);


    return (
        <Box>
            Client component: {users?.[1].email}
        </Box>
    )
}
