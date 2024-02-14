import { Box } from "@mui/material";

export default function Dynamic({ params }: { params: { dynamic: string } }) {
    console.log('dynamic: ', params.dynamic);

    return (
        <Box>
           Blog: {params.dynamic}
        </Box>
    )
}
