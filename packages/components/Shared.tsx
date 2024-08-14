import { Box } from '@mui/material';


export default function Shared({ prop }: { prop: string }) {
    return (
        <Box>
            Shared component: {prop}
        </Box>
    )
}
