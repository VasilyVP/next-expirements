import Box from '@mui/material/Box';


export default function Template({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <Box>
            Template
            {children}
        </Box>
    )
}
