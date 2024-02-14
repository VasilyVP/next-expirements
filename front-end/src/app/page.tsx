import { Box, Stack } from '@mui/material';
import Login from '@/components/Login';

export default /* async */ function Home() {
  //await new Promise(resolve => setTimeout(() => resolve('ok'), 500));

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
      </Stack>
    </Box>
  )
}
