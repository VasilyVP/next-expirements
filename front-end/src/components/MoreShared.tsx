'use client'
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import sayHello from '@/actions/sayHello';
//import { Shared } from '@ntp/packages/components';


export default function MoreShared() {
    const [expect, setExpect] = useState('');

    useEffect(() => {
        sayHello()
            .then(res => setExpect(res));
    });

    return (
        <Box>
            Expect: {expect}
        </Box>
    )
}
