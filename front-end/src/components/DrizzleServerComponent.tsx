import drizzleClient from "@/drizzleDb/client"
import { usersTable } from "@/drizzleDb/schema"
import { Box } from "@mui/material"


export default async function DrizzleServerComponent() {
    const users = await drizzleClient.select().from(usersTable);

    const usersList = users.map((user) => {
        return (
            <li key={user.id}>
                {user.email}
            </li>
        )
    })

    return (
        <Box>
            Users:
            <ol>
                {usersList}
            </ol>
        </Box>
    )
}
