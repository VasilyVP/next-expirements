import { Box } from '@mui/material';


export default function Shared({ env }: { env: string }) {
    return (
        <Box>
            Shared component {env}
        </Box>
    )
}
