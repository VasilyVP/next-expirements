import { Box, Stack } from '@mui/material';
import Login from '@/components/Login';
import Shared from '@ntp/packages/components/Shared'; // direct import
//import { User } from '@ntp/types/User'; // direct import
//import { User } from '@ntp/types';
import MoreShared from '@/components/MoreShared';
import ServerComponent from '@/components/ServerComponent';
import ClientComponent from '@/components/ClientComponent';
import DrizzleServerComponent from '@/components/DrizzleServerComponent';


export default async function Home() {
  return (
    <Box
      height='100vh'
      display='flex' justifyContent='center' alignItems='center'
    >
      <Stack
        display='flex' alignItems='center'
        spacing={2}
      >
        <Box fontSize='24px'>
          Landing page
        </Box>
        <Box><Login /></Box>
        <Box>
          <MoreShared />
        </Box>
        <Box>
          <Shared prop='something' />
        </Box>
        <ServerComponent />
        <ClientComponent />
        <DrizzleServerComponent />
      </Stack>
    </Box>
  )
}
