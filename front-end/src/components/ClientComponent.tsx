'use client'
import { trpcClc } from "@/trpc/client";
import { Box } from "@mui/material";


export default function ClientComponent() {
    const { data /* , error  */} = trpcClc.userList.useQuery(undefined, {
        refetchOnMount: false,
    });

    return (
        <Box>
            Client component: {data?.[1].email}
        </Box>
    )
}
