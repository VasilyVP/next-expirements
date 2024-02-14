import Login from '@/components/Login'
//import useAuthenticated from '@/hooks/useAuthenticated';
import { Box, Container, Stack } from '@mui/material';
import Link from 'next/link';
//import { redirect } from "next/navigation";

export default function AuthenticatedLayout({
    children,
}: {
    children: React.ReactNode
}) {
    //const { isAuthenticated } = useAuthenticated();

    return (
        <Container>
            <Box py='8px'>
                <Box display='flex' justifyContent='space-between'>
                    <Stack
                        direction='row'
                        spacing={3}
                        fontSize='18px'
                    >
                        <Link href='/page1'>Page 1</Link>
                        <Link href='/page2'>Page 2</Link>
                        <Link href='/page3'>Page 3</Link>
                    </Stack>
                    <Box><Login /></Box>
                </Box>
                <Box mt='16px'>
                    {children}
                </Box>
            </Box>
        </Container>
    )
}
