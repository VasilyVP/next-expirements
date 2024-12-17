import { SignedIn, UserButton } from '@clerk/nextjs';
import Login from '@/components/Login'
import { Box, Container, Stack } from '@mui/material';
import Link from 'next/link';

export default function AuthenticatedLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SignedIn>
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
                        <Box>
                            <UserButton />
                        </Box>
                    </Box>
                    <Box mt='16px'>
                        {children}
                    </Box>
                </Box>
            </Container>
        </SignedIn>
    )
}
