'use client'
import { useAppDispatch, useAppSelector } from '@/store';
import { Button } from '@mui/material';
import { setAuthenticated } from '@/store/slicers/commonStateSlice';
import { useRouter } from 'next/navigation';


export default function Login() {
    const isAuthenticated = useAppSelector(state => state.common.authenticated);
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleAuth = () => {
        dispatch(setAuthenticated(!isAuthenticated));
        if (!isAuthenticated) router.push('/page1');
        else router.push('/');
    }

    return (
        <Button
            variant='contained'
            onClick={handleAuth}
        >
            {isAuthenticated ? 'Logout' : 'Login'}
        </Button>
    )
}
